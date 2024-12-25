System.register("chunks:///_virtual/MultTextures.ts",["cc"],(function(t){var e,r,a,i,s,n,u,h,l,c,o,p,d,f,D;return{setters:[function(t){e=t.cclegacy,r=t.game,a=t.Game,i=t.UIRenderer,s=t.VERSION,n=t.Sprite,u=t.director,h=t.Director,l=t.StencilManager,c=t.resources,o=t.Material,p=t.renderer,d=t.TiledLayer,f=t.MotionStreak,D=t.ParticleSystem2D}],execute:function(){e._RF.push({},"bd7e7vtojdMUJODlbuIb/Yi","MultTextures",void 0);var x=t("MultBatch2D",{enable:!1,parent:null,textures:[],hash:0,reset:function(){this.textures.length=0}}),_=function(){x.enable=!1,c.load("multTextures/Mult-material",o,(function(t,r){if(!t){var a=e.builtinResMgr.get("ui-sprite-material");a&&(x.hash=o.getHash(a),x.parent=r,x.enable=!0,r.addRef())}}))},y=0,M=[];r.once(a.EVENT_GAME_INITED,(function(){_();var t=i.prototype,e=t.updateMaterial;t.updateMaterial=function(){e.call(this),function(t,e){if(e){var r=!0;r&&d&&(r=!(t instanceof d)),r&&f&&(r=!(t instanceof f)),r&&D&&(r=!(t instanceof D)),e.isMultTextures=!1,r&&x.hash==e.hash&&(e.isMultTextures=!0)}}(this,this.customMaterial||this.material)}})),r.once(a.EVENT_ENGINE_INITED,(function(){e.UI.RenderData.prototype.texID=-1,e.UI.RenderData.prototype.isSpr=!1,e.UI.RenderData.prototype.texDirty=!0,e.UI.RenderData.prototype.dataDirty=0,Object.defineProperty(e.UI.RenderData.prototype,"vertDirty",{get:function(){return this._vertDirty},set:function(t){this._vertDirty=t,!0!==t||this.isSpr||(this.dataDirty|=1),this._renderDrawInfo&&t&&this._renderDrawInfo.setVertDirty(t)}}),Object.defineProperty(e.UI.RenderData.prototype,"textureDirty",{get:function(){return this.texDirty},set:function(t){this.texDirty=t,!0===t&&(this.texID=-1)}});var t=s.concat();if(t=t.replace(".","").replace(".",""),parseInt(t)<384){var r=i.prototype,a=r.markForUpdateRenderData;r.markForUpdateRenderData=function(t){void 0===t&&(t=!0),a.call(this,t),t&&this.renderData&&(this.renderData.isSpr||(this.renderData.dataDirty|=2))};var c=r.updateRenderer;r.updateRenderer=function(){c.call(this),this.renderData&&(this.renderData.isSpr||(this.renderData.dataDirty&=-3))}}var o=e.UI.spriteAssembler;if(o){var d=o.getAssembler;o.getAssembler=function(t){var e=d.call(this,t);if(null==e.changeUV){e.changeUV=function(t){var e=t.renderData;e&&(e.dataDirty=1,e.isSpr=!0)};var r=e.updateUVs;r&&(t.type==n.Type.FILLED&&t.fillType!=n.FillType.RADIAL?e.updateUVs=function(t,e,a){r.call(this,t,e,a),this.changeUV(t)}:e.updateUVs=function(t){r.call(this,t),this.changeUV(t)});var a=e.updateWorldVertexAndUVData;a&&(e.updateWorldVertexAndUVData=function(t,e){a.call(this,t,e),this.changeUV(t)})}return e}}e.internal.Batcher2D.prototype.cacheTextures=[],e.internal.Batcher2D.prototype.currMaterial=null,e.internal.Batcher2D.prototype.isMultTextures=!1,Object.defineProperty(e.internal.Batcher2D.prototype,"_currMaterial",{get:function(){return this.currMaterial},set:function(t){this.currMaterial!==t&&(this.currMaterial=function(t){if(x.reset(),!x.enable||!t||!t.isMultTextures)return t;if(!x.parent||!x.parent.isValid)return _(),t;var e=M[y++];if(!e||!e.isValid){var r={parent:x.parent};e=new p.MaterialInstance(r),M[y-1]=e,e.isMultTextures=!0,e.cacheTextures=[-1],e.addRef()}return e}(t),x.enable&&(this.isMultTextures=!1,this.currMaterial&&this.currMaterial.isMultTextures&&(this.cacheTextures=this.currMaterial.cacheTextures,this.isMultTextures=!0)))}}),u.on(h.EVENT_AFTER_DRAW,(function(t){e.internal.Batcher2D.isMultTextures=!1,e.internal.Batcher2D._rdHash=-1,x.reset(),y=0}));var f={texture:new e.SimpleTexture,defalut:new e.SimpleTexture,setFrame:function(t){this.texture._gfxSampler=t.getGFXSampler(),this.texture._gfxTextureView=t.getGFXTexture()}};e.internal.Batcher2D.prototype._rdHash=-1,e.internal.Batcher2D.prototype.commitComp=function(t,e,r,a,i){var s,n=-1,u=0,h=-1;if(e&&e.chunk){if(!e.isValid())return;u=e.dataHash,s=e.material,n=(h=e.chunk.bufferId)<<16|e.layer}2===t.stencilStage||6===t.stencilStage?this._insertMaskBatch(t):t.stencilStage=l.sharedManager.stage;var c=t.stencilStage,o=-1,p=null,d=x,D=!1,_=!1,y=x.textures;if(d.enable&&s&&s.isMultTextures&&(r&&r.isValid&&(p=r.getGFXTexture()),p&&(_=!0,(o=y.indexOf(p))<0&&8==y.length&&(D=!0),this.isMultTextures&&(s=this._currMaterial,u=this._currHash,this._rdHash!=n&&(D=!0,o=-1)))),(D||this._currHash!==u||0===u||this._currMaterial!==s||this._currDepthStencilStateStage!==c)&&(this.autoMergeBatches(this._currComponent),e&&!e._isMeshBuffer&&this.updateBuffer(e.vertexFormat,h),this._rdHash=n,this._currRenderData=e,this._currHash=e?e.dataHash:0,this._currComponent=t,this._currTransform=i,this._currMaterial=t.getRenderMaterial(0),this._currDepthStencilStateStage=c,this._currLayer=t.node.layer,r?(this._currTexture=r.getGFXTexture(),this._currSampler=r.getGFXSampler(),this._currTextureHash=r.getHash(),this._currSamplerHash=this._currSampler.hash):(this._currTexture=null,this._currSampler=null,this._currTextureHash=0,this._currSamplerHash=0)),a.fillBuffers(t,this),_){if(o<0&&(o=y.length,y.push(p),o>0)){var M=p.objectID,g=this.cacheTextures;if(g[o]!==M){g[o]=M,f.setFrame(r);var T="texture"+o;this._currMaterial.setProperty(T,f.texture)}}this._fillDatas(e,o)}},e.internal.Batcher2D.prototype._fillDatas=function(t,e){if(t){var r=0,a=t.chunk.vb;if(1==t.dataDirty)for(var i=0,s=a.length;i<s;i+=9)r=~~(1e5*a[i+3]),a[i+3]=10*r+e;else if(t.texID!=e)for(var n=0,u=a.length;n<u;n+=9)r=~~(.1*a[n+3]),a[n+3]=10*r+e;t.dataDirty=0,t.texID=e}}})),e._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./MultTextures.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});