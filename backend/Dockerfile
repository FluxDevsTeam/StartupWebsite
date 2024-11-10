# pull official base image
FROM python:3.9.7-alpine

#set work directory
RUN mkdir /StartupWebsite/backend
WORKDIR /StartupWebsite/backend

#set environment variable
ENV PYTHONDONTWRITEBYCODE 1
ENV PYTHONUNBUFFERED 1

#install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .