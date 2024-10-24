pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/Pavarna/Portfolio-Project.git'
        GIT_BRANCH = 'master'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from the specified branch
                git url: GIT_REPO_URL, branch: GIT_BRANCH
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use npm ci for faster installations (requires package-lock.json)
                bat 'npm ci'
            }
        }
        stage('Build Project') {
            steps {
                // Run the build process
                bat 'npm run build'
            }
        }
        stage('Deploy to GitHub Pages') {
            steps {
                // Set Git user identity locally
                bat 'git config user.email "subbupavar@gmail.com"'
                bat 'git config user.name "Pavarna"'
                
                // Run the deployment script
                bat 'npm run deploy'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed.'
        }
        always {
            cleanWs() // Clean the workspace after build to free up space
        }
    }
}
