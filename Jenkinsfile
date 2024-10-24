pipeline{
    agent any
    stages{
        stage('Checkout Code'){
            steps{
                git url:'https://github.com/Pavarna/Portfolio-Project.git', branch: 'master'
            }
        }
        stage('Install Dependencies'){
            steps{
                  bat 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy to GitHub Pages') {
            steps {
                // Set Git user identity locally
                bat 'git config user.email "subbupavar@gmail.com"'
                bat 'git config user.name "Pavarna"'
                
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
    }
}