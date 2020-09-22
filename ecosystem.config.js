module.exports = {
  apps : [{
    name: 'skala_home',
    script: 'build/app.js',
    env: {
        "COMMON_VARIABLE": "true"
      },
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '192.168.0.220',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : './app',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
