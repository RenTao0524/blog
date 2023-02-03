import{_ as n,p as a,q as s,a1 as e}from"./framework-f385dd5f.js";const t={},l=e(`<h2 id="yaml语法练习" tabindex="-1"><a class="header-anchor" href="#yaml语法练习" aria-hidden="true">#</a> YAML语法练习</h2><h3 id="yaml对象" tabindex="-1"><a class="header-anchor" href="#yaml对象" aria-hidden="true">#</a> YAML对象</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">config</span><span class="token punctuation">:</span>
 <span class="token key atrule">vesion</span><span class="token punctuation">:</span> <span class="token string">&#39;1.0&#39;</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;test demo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yaml数组" tabindex="-1"><a class="header-anchor" href="#yaml数组" aria-hidden="true">#</a> YAML数组</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># YAML数组</span>
<span class="token key atrule">list</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> a
 <span class="token punctuation">-</span> b
 <span class="token punctuation">-</span> c
 <span class="token punctuation">-</span>
  <span class="token punctuation">-</span> A
  <span class="token punctuation">-</span> B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yaml引用" tabindex="-1"><a class="header-anchor" href="#yaml引用" aria-hidden="true">#</a> YAML引用</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>&amp; 用来建立锚点（defaults），&lt;&lt; 表示合并到当前数据，* 用来引用锚点。</p></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">obj</span><span class="token punctuation">:</span> <span class="token important">&amp;obj</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;tom&#39;</span>
 <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">23</span>

<span class="token key atrule">copyObj</span><span class="token punctuation">:</span>
  <span class="token key atrule">height</span><span class="token punctuation">:</span> <span class="token number">180</span>
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*obj</span>

<span class="token important">&amp;str</span> <span class="token key atrule">str2</span><span class="token punctuation">:</span> <span class="token string">&#39;emmm&#39;</span>

<span class="token key atrule">str3</span><span class="token punctuation">:</span>
  <span class="token key atrule">dd</span><span class="token punctuation">:</span> <span class="token important">*str</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[l];function c(p,d){return a(),s("div",null,i)}const u=n(t,[["render",c],["__file","use.html.vue"]]);export{u as default};
