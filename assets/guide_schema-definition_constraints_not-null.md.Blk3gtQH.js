import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.BBV1ZMcZ.js";const c=JSON.parse('{"title":"Not-null Constraints","description":"","frontmatter":{},"headers":[],"relativePath":"guide/schema-definition/constraints/not-null.md","filePath":"guide/schema-definition/constraints/not-null.md"}'),l={name:"guide/schema-definition/constraints/not-null.md"};function e(h,s,p,o,k,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="not-null-constraints" tabindex="-1">Not-null Constraints <a class="header-anchor" href="#not-null-constraints" aria-label="Permalink to &quot;Not-null Constraints&quot;">​</a></h1><p>A not-null constraint simply specifies that a column must not assume the <code>NULL</code> value.</p><p>You can define a not-null constraint with the <code>notNull</code> column modifier:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { table, text } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/pg/schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  columns: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,4)]))}const u=i(l,[["render",e]]);export{c as __pageData,u as default};