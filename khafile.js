let project = new Project('Again and again');
project.addAssets('Assets/**', {
    nameBaseDir: 'Assets',
    destination: '{dir}/{name}',
    name: '{dir}/{name}'
});
project.addShaders('Shaders/**');
project.addSources('Sources');
project.addLibrary("slayter");
project.addParameter('-dce full');
project.targetOptions.html5.webgl = true;
resolve(project);
