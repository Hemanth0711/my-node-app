pipeline {
    agent any
    
    tools {
        nodejs "NodeJS_18"  // matches what you set in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Hemanth0711/my-node-app.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy to Local') {
            steps {
                sh '''
                pm2 delete my-node-app || true
                pm2 start server.js --name my-node-app
                '''
            }
        }
    }
}
