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

  const fix = NSClassFromString(frameworkName)
  if (!fix) {
    log(frameworkName + " NSClassFromString failed")
    return
  }

  if (!fix.fix()) {
    log(frameworkName + " fix failed")
    return
  }

  log(frameworkName + " fixed")
}
