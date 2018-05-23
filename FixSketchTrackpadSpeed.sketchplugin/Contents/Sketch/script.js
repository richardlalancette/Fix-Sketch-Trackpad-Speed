const frameworkName = "FixSketchTrackpadSpeed"

function onStart(context) {
  const scriptPath = context.scriptPath
  const directory = scriptPath.stringByDeletingLastPathComponent()
  const mocha = Mocha.sharedRuntime()

  const loaded = mocha.loadFrameworkWithName_inDirectory(frameworkName, directory)
  if (!loaded) {
    log(frameworkName + " loadFrameworkWithName_inDirectory failed")
    return
  }

  const frameworkClass = NSClassFromString(frameworkName)
  if (!frameworkClass) {
    log(frameworkName + " NSClassFromString failed")
    return
  }

  if (!frameworkClass.fix()) {
    log(frameworkName + " fix failed")
    return
  }

  log(frameworkName + " OK")
}
