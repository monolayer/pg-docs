import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.BVrlcXZz.js";const c=JSON.parse('{"title":"Function: timestamptz()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/schema/functions/timestamptz.md","filePath":"reference/api/schema/functions/timestamptz.md"}'),n={name:"reference/api/schema/functions/timestamptz.md"};function l(h,s,p,r,k,d){return t(),i("div",null,s[0]||(s[0]=[e(`<p><a href="./../../modules.html">monolayer-pg</a> / <a href="./../">schema</a> / timestamptz</p><h1 id="function-timestamptz" tabindex="-1">Function: timestamptz() <a class="header-anchor" href="#function-timestamptz" aria-label="Permalink to &quot;Function: timestamptz()&quot;">​</a></h1><blockquote><p><strong>timestamptz</strong>(<code>precision</code>?): <a href="./../classes/PgTimestampWithTimeZone.html"><code>PgTimestampWithTimeZone</code></a></p></blockquote><p>Column that stores both date and time with time zone with an optional precision.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>precision</code>?</td><td><code>DateTimePrecision</code></td><td>Number of fractional digits retained in the seconds field. The allowed range is from 0 to 6.</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../classes/PgTimestampWithTimeZone.html"><code>PgTimestampWithTimeZone</code></a></p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;Remarks&quot;">​</a></h2><p>Without <code>precision</code> specified, there is no explicit bound on precision. It can store date / times between 4713 BC and 294276 AD.</p><p>The JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date" target="_blank" rel="noreferrer"><code>Date</code></a> implementation can represent only a maximum of September 13, 275760 AD. If you need to read/store dates after this maximum, you&#39;ll have to implement a custom type serializer and parser with <a href="https://github.com/brianc/node-pg-types" target="_blank" rel="noreferrer">node-pg-types</a>.</p><p><strong>Kysely database schema type definition</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  readonly </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__select__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  readonly </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__insert__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  readonly </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__update__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Date </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>Nullability and optionality will change according to the column&#39;s constraints, generated values, and default data values.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { schema, table, timestamptz } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/pg/schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dbSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tables: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    example: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      columns: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        createdAt: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timestamptz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Kysely database schema type</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dbSchema.infer;</span></span></code></pre></div><h2 id="see" tabindex="-1">See <a class="header-anchor" href="#see" aria-label="Permalink to &quot;See&quot;">​</a></h2><p><a href="https://www.postgresql.org/docs/current/datatype-datetime.html#DATATYPE-DATETIME" target="_blank" rel="noreferrer">timestamp without time zone</a> (<em>PostgreSQL Docs</em>)</p>`,18)]))}const m=a(n,[["render",l]]);export{c as __pageData,m as default};
