#version 300 es

#define PI 3.142

precision mediump float;
precision mediump sampler3D;

uniform float u_TimeDelta;
uniform float u_TotalTime;
uniform sampler2D u_InitialPosition;

vec3 u_Gravity = vec3(0.0, 0.0, 0.0);
vec3 u_Origin = vec3(0.0, 0.0, 0.0);
float u_MinTheta = -PI;
float u_MaxTheta = PI;
float u_MinSpeed = 0.01;
float u_MaxSpeed = 0.02;

in vec3 i_Position;
in float i_Age;
in float i_Life;
in vec3 i_Velocity;

// Transform Feedback Varyings
out vec3 v_Position;
out float v_Age;
out float v_Life;
out vec3 v_Velocity;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

vec3 flow(vec3 _p){
    float x = _p.y * _p.z;
    float y = _p.x * _p.z;
    float z = _p.y * _p.x;

    return vec3(x,y,z);
}

vec3 trigFlow(vec3 _p){
    return vec3(sin(_p.y*_p.z), cos(sin(_p.x)), sin(_p.z*_p.y));
}

vec3 piFlow(vec3 _p){
    return vec3(
            sin(2.0 * PI * _p.z),
            sin(2.0 * PI * _p.x),
            cos(2.0 * PI * _p.y)
        );
}

void main(){
    if(i_Age >= i_Life) {
        v_Position = 0.5 * (2.0 * texelFetch(u_InitialPosition, ivec2(gl_VertexID, 0), 0).rgb - vec3(1.0));
        v_Age = 0.0;
        v_Life = i_Life;
        v_Velocity = vec3(0);
    } else {
        v_Position = i_Position + i_Velocity * u_TimeDelta;
        v_Age = i_Age + u_TimeDelta;
        v_Life = i_Life;
        v_Velocity = i_Velocity + u_Gravity * u_TimeDelta + piFlow(v_Position) * 0.02 * u_TimeDelta;
    }
}
