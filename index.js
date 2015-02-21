
module.exports = {
  glsl: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec2 resolution;uniform sampler2D from, to;uniform float progress;void main() {vec2 p = gl_FragCoord.xy / resolution;gl_FragColor = mix(texture2D(from, p), texture2D(to, p), progress);}",
  uniforms: {},
  // Following fields are here to be compliant with glsl-transitions format
  id: "7e61b1f44a391f0c0894",
  name: "fade",
  owner: "glslioadmin",
  html_url: "https://gist.github.com/glslioadmin/7e61b1f44a391f0c0894",
  created_at: "2014-05-16T00:00:00Z",
  updated_at: "2014-05-16T00:00:00Z",
  stars: 0
};
