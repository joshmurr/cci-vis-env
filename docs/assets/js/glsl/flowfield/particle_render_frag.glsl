#version 300 es
precision mediump float;

in float v_Age;
in float v_Life;

out vec4 o_FragColor;

vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d){
    return a+b*cos(6.28318*(c*t+d));
}

void main() {
    float t = v_Age/v_Life;
    float distance = length(2.0 * gl_PointCoord - 1.0);
    if (distance > 1.0) {
            discard;
    }
    o_FragColor = vec4(
            palette(t,
                vec3(0.8,0.5,0.4),
                vec3(0.2,0.4,0.2),
                vec3(2.0,1.0,1.0),
                vec3(0.0,0.25,0.25)), 1.0-t
            );
}
