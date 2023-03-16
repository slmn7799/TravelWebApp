# Use an official Node.js runtime as a parent image
FROM node:latest as build

# Set the working directory to /app
WORKDIR /usr/local/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json /usr/local/app/

# Install the dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . /usr/local/app/

# Build the Angular app for production
RUN npm run build --prod

# Use a lightweight web server for serving the Angular app
FROM nginx:latest

# Copy the built Angular app from the previous stage to the Nginx server's web root directory
COPY --from=build /usr/local/app/dist/trouvaille /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
