const frameworkName = "FixSketchTrackpadSpeed"

function onStart(context) {
  const scriptPath = context.scriptPath
  const directory = scriptPath.stringByDeletingLastPathComponent()
  const mocha = Mocha.sharedRuntime()

  const loaded = mocha.loadFrameworkWithName_inDirectory(frameworkName, directory)
  if (!loaded) {
    log("FixSketchTrackpadSpeed loadFrameworkWithName failed")
    return
  }

  const fix = NSClassFromString("FixSketchTrackpadSpeed")
  if (!fix) {
    log("FixSketchTrackpadSpeed NSClassFromString failed")
    return
  }

  if (!fix.fix()) {
    log("FixSketchTrackpadSpeed fix failed")
    return
  }

  log("FixSketchTrackpadSpeed fixed")
}
