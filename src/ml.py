import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
from torch.utils.data import DataLoader
import torchvision.datasets as datasets
import torchvision.transforms as transforms

import csv
import numpy as np
import matplotlib.pyplot as plt

import sklearn
from sklearn import preprocessing
from sklearn.preprocessing import OneHotEncoder

# JSON file reading
import json
d = open('data1.json')
h = open('habits.json')
d0 = open('data.json')
data = json.load(d)
habits = json.load(h)

# one-hot encoding
enc = OneHotEncoder()
habit_label = []
counter = 0
for i in habits:
    habit_label.append([i, counter])
    counter += 1
enc.fit(habit_label)

print(habit_label)

all_habits = []
for i in data:
    current_habits = []
    for j in data[i]["habits"]:
        current_habits.append(j)
    current_habits = enc.transform(current_habits).toarray()
    all_habits.append(habits)

rating = []
for i in data:
    rating.append([data[i]["rating"]])

# print(all_habits)

# hyperparameters
train_labels = torch.tensor(rating)
input_size = len(data)
output_size = len(habits)
learning_rate = 0.001
batch_size = 10
num_epochs = 2

# load data
train_loader = DataLoader(
    dataset=all_habits, batch_size=batch_size, shuffle=True)
test_loader = DataLoader(
    dataset=all_habits, batch_size=batch_size, shuffle=True)

device = "cuda" if torch.cuda.is_available() else "cpu"

# model


class NN(nn.Module):
    def __init__(self, input_size, output_size):
        super(NN, self).__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(input_size, output_size)
        )

    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits


model = NN(input_size=input_size, output_size=output_size).to(device)

print("--------")
print(model)
print("--------")

criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=learning_rate)

# Train Network

loss_median = []
train_accuracy = []
test_accuracy = []

for epoch in range(num_epochs):

    loss_values = []

    for batch_idx, (data, targets) in enumerate(train_loader):
        data = data.to(device=device)
        targets = targets.to(device=device)

        data = data.reshape(data.shape[0], -1)

        scores = model(data)
        loss = criterion(scores, targets)

        loss_values.append(loss.item())

        optimizer.zero_grad()
        loss.backward()

        optimizer.step()
