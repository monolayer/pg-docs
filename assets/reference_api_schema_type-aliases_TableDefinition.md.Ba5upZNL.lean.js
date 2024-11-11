import{_ as o,c as a,a2 as t,o as c}from"./chunks/framework.C5GEIE5F.js";const m=JSON.parse('{"title":"Type Alias: TableDefinition<T, PK>","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/schema/type-aliases/TableDefinition.md","filePath":"reference/api/schema/type-aliases/TableDefinition.md"}'),n={name:"reference/api/schema/type-aliases/TableDefinition.md"};function r(d,e,s,i,l,g){return c(),a("div",null,e[0]||(e[0]=[t('<p><a href="./../../modules.html">monolayer</a> / <a href="./../">schema</a> / TableDefinition</p><h1 id="type-alias-tabledefinition-t-pk" tabindex="-1">Type Alias: TableDefinition&lt;T, PK&gt; <a class="header-anchor" href="#type-alias-tabledefinition-t-pk" aria-label="Permalink to &quot;Type Alias: TableDefinition\\&lt;T, PK\\&gt;&quot;">​</a></h1><blockquote><p><strong>TableDefinition</strong>&lt;<code>T</code>, <code>PK</code>&gt;: <code>object</code></p></blockquote><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>T</code></td></tr><tr><td><code>PK</code> <em>extends</em> <code>string</code></td></tr></tbody></table><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><h3 id="columns" tabindex="-1">columns? <a class="header-anchor" href="#columns" aria-label="Permalink to &quot;columns?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>columns</strong>: <code>T</code> <em>extends</em> <code>ColumnRecord</code> ? <code>T</code> : <code>never</code></p></blockquote><h3 id="constraints" tabindex="-1">constraints? <a class="header-anchor" href="#constraints" aria-label="Permalink to &quot;constraints?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>constraints</strong>: <code>object</code></p></blockquote><h3 id="constraints-checks" tabindex="-1">constraints.checks? <a class="header-anchor" href="#constraints-checks" aria-label="Permalink to &quot;constraints.checks?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>checks</strong>: (<a href="./../classes/PgCheck.html"><code>PgCheck</code></a> | <a href="./../classes/PgUnmanagedCheck.html"><code>PgUnmanagedCheck</code></a>)[]</p></blockquote><h3 id="constraints-foreignkeys" tabindex="-1">constraints.foreignKeys? <a class="header-anchor" href="#constraints-foreignkeys" aria-label="Permalink to &quot;constraints.foreignKeys?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>foreignKeys</strong>: keyof <code>T</code> <em>extends</em> <code>string</code> ? (<a href="./../classes/PgForeignKey.html"><code>PgForeignKey</code></a>&lt;keyof <code>T</code>, <code>any</code>&gt; | <code>PgSelfReferentialForeignKey</code>&lt;keyof <code>T</code>, <code>any</code>&gt; | <a href="./../classes/PgUnmanagedForeignKey.html"><code>PgUnmanagedForeignKey</code></a>&lt;keyof <code>T</code>, <code>any</code>&gt;)[] : []</p></blockquote><h3 id="constraints-primarykey" tabindex="-1">constraints.primaryKey? <a class="header-anchor" href="#constraints-primarykey" aria-label="Permalink to &quot;constraints.primaryKey?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>primaryKey</strong>: keyof <code>T</code> <em>extends</em> <code>string</code> ? <code>PK</code>[] <em>extends</em> keyof <code>T</code>[] ? <a href="./../classes/PgPrimaryKey.html"><code>PgPrimaryKey</code></a>&lt;keyof <code>T</code>, <code>PK</code>&gt; : <a href="./../classes/PgPrimaryKey.html"><code>PgPrimaryKey</code></a>&lt;keyof <code>T</code>, <code>PK</code>&gt; : <code>never</code></p></blockquote><h3 id="constraints-unique" tabindex="-1">constraints.unique? <a class="header-anchor" href="#constraints-unique" aria-label="Permalink to &quot;constraints.unique?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>unique</strong>: keyof <code>T</code> <em>extends</em> <code>string</code> ? <a href="./../classes/PgUnique.html"><code>PgUnique</code></a>&lt;keyof <code>T</code>&gt;[] : []</p></blockquote><h3 id="indexes" tabindex="-1">indexes? <a class="header-anchor" href="#indexes" aria-label="Permalink to &quot;indexes?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>indexes</strong>: keyof <code>T</code> <em>extends</em> <code>string</code> ? (<a href="./../classes/PgIndex.html"><code>PgIndex</code></a>&lt;keyof <code>T</code>&gt; | <a href="./../classes/PgUnmanagedIndex.html"><code>PgUnmanagedIndex</code></a>)[] : <code>never</code></p></blockquote><h3 id="triggers" tabindex="-1">triggers? <a class="header-anchor" href="#triggers" aria-label="Permalink to &quot;triggers?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>triggers</strong>: (<a href="./../classes/PgTrigger.html"><code>PgTrigger</code></a>&lt;keyof <code>T</code> <em>extends</em> <code>string</code> ? keyof <code>T</code> : <code>never</code>&gt; | <a href="./../classes/PgTrigger.html"><code>PgTrigger</code></a>&lt;<code>never</code>&gt; | <a href="./../classes/PgUnmanagedTrigger.html"><code>PgUnmanagedTrigger</code></a>)[]</p></blockquote>',22)]))}const f=o(n,[["render",r]]);export{m as __pageData,f as default};
