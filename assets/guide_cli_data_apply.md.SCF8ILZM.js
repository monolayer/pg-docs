import{_ as s,c as t,a2 as i,o as e}from"./chunks/framework.BVrlcXZz.js";const c=JSON.parse('{"title":"data apply","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli/data/apply.md","filePath":"guide/cli/data/apply.md"}'),n={name:"guide/cli/data/apply.md"};function p(l,a,d,h,r,o){return e(),t("div",null,a[0]||(a[0]=[i(`<h1 id="data-apply" tabindex="-1"><code>data apply</code> <a class="header-anchor" href="#data-apply" aria-label="Permalink to &quot;\`data apply\`&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Applies all pending data migrations.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># create the default database</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monolayer-pg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># create the database with id \`stats\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monolayer-pg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --database-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stats</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># create the database loading environment variables from \`.env.test\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monolayer-pg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --env-file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env.test</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td><code>-d, --database-id &lt;id&gt;</code></td><td>(<em>Optional</em>) Id of an exported database in your databases file to use.</td></tr><tr><td><code>-e, --env-file &lt;path&gt;</code></td><td>(<em>Optional</em>) Load environment variables from an <code>.env</code> file.</td></tr><tr><td><code>-g, --group &lt;group-name&gt;</code></td><td>(<em>Optional</em>) Data migration group name (default: &quot;data&quot;)</td></tr></tbody></table>`,7)]))}const g=s(n,[["render",p]]);export{c as __pageData,g as default};
