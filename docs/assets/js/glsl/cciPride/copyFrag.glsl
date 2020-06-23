#version 300 es
precision mediump float;

uniform sampler2D u_StateRender;
uniform vec2 u_Scale;
in vec2 v_TexCoord;

out vec4 OUTCOLOR;

uniform mediump sampler3D u_ColorCube;


void main(){
    // OUTCOLOR = texture(u_StateRender,  v_TexCoord.xy);
    vec3 coord = texture(u_StateRender,  v_TexCoord.xy).rgb;
    OUTCOLOR = texture(u_ColorCube, coord/2.0);
}
