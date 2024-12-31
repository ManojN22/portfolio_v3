# Step 1: Use an official Node.js image as a base
FROM node:18

# Step 2: Set the working directory for the app
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if present) to install dependencies first
COPY package*.json ./

# Step 4: Install the application dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the Next.js application
# RUN npm run build

# Step 7: Expose the custom port (5054)
EXPOSE 5054

# Step 8: Command to run the Next.js app on port 5054
ENV PORT 5054
CMD ["npm", "run","dev"]
