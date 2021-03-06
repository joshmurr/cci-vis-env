#version 300 es
precision mediump float;

uniform sampler2D u_StateRender;
uniform vec2 u_Scale;

in vec2 v_TexCoord;
out vec4 OUTCOLOR;

void main(){
    OUTCOLOR = texture(u_StateRender, gl_FragCoord.xy / u_Scale);
}
