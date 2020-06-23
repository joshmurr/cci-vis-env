#version 300 es
precision mediump float;

uniform sampler2D u_StateUpdate;
uniform vec2 u_Scale;

out vec4 OUTCOLOR;

uniform u_InitColors {
    vec4 color[8];
} COLORS;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

int get(vec2 _offset){
    int sum = 0;
    vec3 color = texture(u_StateUpdate, (gl_FragCoord.xy + _offset) / u_Scale).rgb;
    if(color.r > 0.5) sum += 1;
    if(color.g > 0.5) sum += 4;
    if(color.b > 0.5) sum += 2;
    return sum;
}

void main(){
    int thisCell = get(vec2( 0.0,  0.0));
    int sum =
        // get(vec2( 0.0,  0.0)) +
        get(vec2(-1.0, -1.0)) +
        get(vec2(-1.0,  0.0)) +
        get(vec2(-1.0,  1.0)) +
        get(vec2( 0.0, -1.0)) +
        get(vec2( 0.0,  1.0)) +
        get(vec2( 1.0, -1.0)) +
        get(vec2( 1.0,  0.0)) +
        get(vec2( 1.0,  1.0));

    sum /= 8;

    vec4 currentColor = texture(u_StateUpdate, (gl_FragCoord.xy) / u_Scale);

    if(thisCell == sum) OUTCOLOR = currentColor;
    else OUTCOLOR = COLORS.color[thisCell];
}
