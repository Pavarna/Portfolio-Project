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
                  sh 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to GitHub Pages') {
            steps {
                sh 'npm run deploy'
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