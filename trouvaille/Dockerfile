# Use an official Node.js runtime as a parent image
FROM node:latest as build

# Set the working directory to /app
WORKDIR /usr/local/app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json /usr/local/app/

# Install the dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . /usr/local/app/

# Build the Angular app for production
RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:latest

# Verify that the dist/tourvaille directory exists
RUN test -d /usr/share/nginx/html/dist/tourvaille || exit 1

# Copy the built Angular app to Nginx web server
COPY --from=build /usr/local/app/dist/tourvaille /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
