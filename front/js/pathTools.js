module.exports.traverse = function(pathname, steps){
  const split = pathname.split("/");
  return split.slice(0, split.length - steps).join("/")
}

module.exports.descend = function(...steps){
  return steps.map(step => step.slice(step.startsWith("/") ? 1 : 0, step.endsWith("/") ? -1 : undefined)).join("/")
}
