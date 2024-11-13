import{_ as a,c as e,a2 as i,o as t}from"./chunks/framework.BVrlcXZz.js";const c=JSON.parse('{"title":"Function: foreignKey()","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/schema/functions/foreignKey.md","filePath":"reference/api/schema/functions/foreignKey.md"}'),n={name:"reference/api/schema/functions/foreignKey.md"};function l(h,s,r,p,o,d){return t(),e("div",null,s[0]||(s[0]=[i(`<p><a href="./../../modules.html">monolayer-pg</a> / <a href="./../">schema</a> / foreignKey</p><h1 id="function-foreignkey" tabindex="-1">Function: foreignKey() <a class="header-anchor" href="#function-foreignkey" aria-label="Permalink to &quot;Function: foreignKey()&quot;">​</a></h1><h2 id="foreignkey-columns-targetcolumns" tabindex="-1">foreignKey(columns, targetColumns) <a class="header-anchor" href="#foreignkey-columns-targetcolumns" aria-label="Permalink to &quot;foreignKey(columns, targetColumns)&quot;">​</a></h2><blockquote><p><strong>foreignKey</strong>&lt;<code>T</code>, <code>C</code>&gt;(<code>columns</code>, <code>targetColumns</code>): <a href="./../classes/PgForeignKey.html"><code>PgForeignKey</code></a>&lt;<code>T</code>, <code>C</code>&gt;</p></blockquote><p>Defines a foreign key constraint on a column or a group of columns.</p><p>Values in the column (or a group of columns) must match the values appearing in some row of another table, maintaining referential integrity between two related tables.</p><h3 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>T</code> <em>extends</em> <code>string</code></td></tr><tr><td><code>C</code> <em>extends</em> <code>AnyPgTable</code></td></tr></tbody></table><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>columns</code></td><td><code>T</code>[]</td><td>The column or a group of columns that will be constrained by the foreign key.</td></tr><tr><td><code>targetColumns</code></td><td><code>T</code>[]</td><td>The column or a group of columns in the target table that the foreign key references.</td></tr></tbody></table><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/PgForeignKey.html"><code>PgForeignKey</code></a>&lt;<code>T</code>, <code>C</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { integer, schema, table } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/pg/schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> columns: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   id: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generatedAlwaysAsIdentity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> documents</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  columns: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generatedAlwaysAsIdentity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    userId: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  constraints: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    foreignKey: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foreignKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;userId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], users, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dbSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tables: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    users,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    documents,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>You can also create self-referential foreign keys, by ommiting the target table:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { integer, schema, table } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/pg/schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tree</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  columns: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nodeId: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generatedAlwaysAsIdentity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    parentId: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  constraints: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    foreignKey: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foreignKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;parentId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nodeId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dbSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tables: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    users,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    documents,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="see" tabindex="-1">See <a class="header-anchor" href="#see" aria-label="Permalink to &quot;See&quot;">​</a></h3><p><em>PostgreSQL docs</em>: <a href="https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK" target="_blank" rel="noreferrer">Foreign Keys</a></p><h2 id="foreignkey-columns-targettable-targetcolumns" tabindex="-1">foreignKey(columns, targetTable, targetColumns) <a class="header-anchor" href="#foreignkey-columns-targettable-targetcolumns" aria-label="Permalink to &quot;foreignKey(columns, targetTable, targetColumns)&quot;">​</a></h2><blockquote><p><strong>foreignKey</strong>&lt;<code>T</code>, <code>C</code>&gt;(<code>columns</code>, <code>targetTable</code>, <code>targetColumns</code>): <a href="./../classes/PgForeignKey.html"><code>PgForeignKey</code></a>&lt;<code>T</code>, <code>C</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>T</code> <em>extends</em> <code>string</code></td></tr><tr><td><code>C</code> <em>extends</em> <code>AnyPgTable</code></td></tr></tbody></table><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>columns</code></td><td><code>T</code>[]</td><td>The column or a group of columns that will be constrained by the foreign key.</td></tr><tr><td><code>targetTable</code></td><td><code>C</code></td><td>The target table that the foreign key references.</td></tr><tr><td><code>targetColumns</code></td><td><code>C</code> <em>extends</em> <a href="./../classes/PgTable.html"><code>PgTable</code></a>&lt;<code>U</code>, <code>any</code>&gt; ? keyof <code>U</code>[] : <code>never</code></td><td>The column or a group of columns in the target table that the foreign key references.</td></tr></tbody></table><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/PgForeignKey.html"><code>PgForeignKey</code></a>&lt;<code>T</code>, <code>C</code>&gt;</p>`,26)]))}const E=a(n,[["render",l]]);export{c as __pageData,E as default};
