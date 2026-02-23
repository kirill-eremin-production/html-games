import{S as e}from"./index-M3azWtdA.js";const t="logDepthFragment",r=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=r);
