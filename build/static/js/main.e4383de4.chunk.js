(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(t,n,e){t.exports=e(277)},121:function(t,n,e){},250:function(t,n,e){var a={"./1.png":251,"./10.png":252,"./11.png":253,"./12.png":254,"./13.png":255,"./14.png":256,"./15.png":257,"./16.png":258,"./17.png":259,"./18.png":260,"./19.png":261,"./2.png":262,"./20.png":263,"./21.png":264,"./22.png":265,"./23.png":266,"./24.png":267,"./25.png":268,"./3.png":269,"./4.png":270,"./5.png":271,"./6.png":272,"./7.png":273,"./8.png":274,"./9.png":275};function r(t){var n=s(t);return e(n)}function s(t){var n=a[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id=250},277:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),s=e(7),o=e.n(s),l=(e(121),e(15)),c=e(16),p=e(18),i=e(17),d=e(19),u=e(6),b=e(104),f=e(4);function y(){var t=Object(u.a)(["\n  margin-top: 25%;\n  font-family: 'Monoton', cursive;\n  text-align: center;\n  color: black;\n"]);return y=function(){return t},t}function g(){var t=Object(u.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 100px;\n"]);return g=function(){return t},t}function m(){var t=Object(u.a)(["\n  width: 100%;\n  height: 200px;\n"]);return m=function(){return t},t}var h=f.b.div(m()),v=f.b.div(g()).withComponent(b.TrinityRingsSpinner),x=f.b.h1(y()),w=function(){return r.a.createElement("div",null,r.a.createElement(x,null,"Happy Coding Everyday"),r.a.createElement(h,null,r.a.createElement(v,{color:"black"})))},k=e(279),E=e(280),O=e(282),j=e(281),I=e(115),S=e(36),C=e(107);function N(){var t=Object(u.a)(["\n  flex: 1 0\n  height: 24px;\n  padding: 0.5em;\n  margin: 0.5em;\n  margin-right: 20px;\n  color: black\n  background: white;\n  border: solid 0.5px black;\n  border-radius: 3px;\n  max-width: 100px;\n"]);return N=function(){return t},t}function A(){var t=Object(u.a)(["\n  flex: 1 0\n  text-align: right;\n  background: none;\n  max-width: 60px;\n  border: none;\n"]);return A=function(){return t},t}function _(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]);return _=function(){return t},t}var T=f.b.div(_()),M=f.b.button(A()),q=f.b.input(N()),L=function(t){var n=t.onChange,e=t.onClick;return r.a.createElement(T,null,r.a.createElement(M,{onClick:e},r.a.createElement(C.a,{size:"45px"})),r.a.createElement(q,{type:"text",placeholder:"Search",onChange:n}))},D=[{title:"LeetCode 556 Next Greater Element III",date:"2019-01-01",tags:"LeetCode 556 Next Greater Element III",extract:"Use Stack data Structure Easy achieve O(N)",data:'<p><span style="color:#000000"><span style="font-size:13px"><span style="background-color:#ffffff">Given a positive</span></span></span><strong>32-bit</strong><span style="color:#000000"><span style="font-size:13px"><span style="background-color:#ffffff">integer</span></span></span><strong>n</strong><span style="color:#000000"><span style="font-size:13px"><span style="background-color:#ffffff">, you need to find the smallest</span></span></span><strong>32-bit</strong><span style="color:#000000"><span style="font-size:13px"><span style="background-color:#ffffff">integer which has exactly the same digits existing in the integer</span></span></span><strong>n</strong><span style="color:#000000"><span style="font-size:13px"><span style="background-color:#ffffff">and is greater in value than n. If no such positive</span></span></span><strong>32-bit</strong><span style="color:#000000"><span style="font-size:13px"><span style="background-color:#ffffff">integer exists, you need to return -1.</span></span></span></p><p><strong>Example 1:</strong></p><pre><code><strong>Input:</strong> 12<br/><strong>Output:</strong> 21<br/></code></pre><p style="text-align:start;text-indent:2em;"> </p><p><strong>Example 2:</strong></p><pre><code><strong>Input:</strong> 21<br/><strong>Output:</strong> -1</code></pre><p></p><pre><code>object Solution {<br/> def nextGreaterElement(n: Int): Int = {<br/> val arr: Array[Char] = n.toString.toCharArray<br/> val len = arr.length<br/> <span style="color:#aa0d91">if</span>(len == <span style="color:#1c00cf">0</span>) <span style="color:#aa0d91">return</span> -<span style="color:#1c00cf">1</span><br/> import collection.mutable.Stack<br/> val <span style="color:#aa0d91">q</span>: Array[Int] = Array.fill(len)(-<span style="color:#1c00cf">1</span>)<br/> val stk: Stack[(Int, Int)] = Stack()<br/> stk.push((arr(len - <span style="color:#1c00cf">1</span>), len - <span style="color:#1c00cf">1</span>))<br/> var i = len - <span style="color:#1c00cf">2</span><br/> <span style="color:#aa0d91">while</span>(i &gt;= <span style="color:#1c00cf">0</span>) {<br/> <span style="color:#aa0d91">while</span>(stk.nonEmpty &amp;&amp; stk.top._1 &gt; arr(i)) {<br/> val (<span style="color:#1c00cf">_</span>, ind) = stk.pop()<br/> <span style="color:#aa0d91">if</span>(<span style="color:#c41a16">q(ind)</span> == -<span style="color:#1c00cf">1</span>) {<br/> <span style="color:#c41a16">q(ind)</span> = i<br/> }<br/> }<br/> stk.push((arr(i), i))<br/> i -= <span style="color:#1c00cf">1</span><br/> }<br/> //println(q.toList)<br/> val <span style="color:#aa0d91">m</span> = q.max<br/> <span style="color:#aa0d91">if</span>(<span style="color:#aa0d91">m</span> == -<span style="color:#1c00cf">1</span>) <span style="color:#aa0d91">return</span> -<span style="color:#1c00cf">1</span><br/> var find = q.length - <span style="color:#1c00cf">1</span><br/> var <span style="color:#aa0d91">continue</span> = true<br/> <span style="color:#aa0d91">while</span> (find &gt;= <span style="color:#1c00cf">0</span> &amp;&amp; <span style="color:#aa0d91">continue</span>) {<br/> <span style="color:#aa0d91">if</span>(<span style="color:#c41a16">q(find)</span> == <span style="color:#aa0d91">m</span>) {<br/> <span style="color:#aa0d91">continue</span> = false<br/> }<br/> find -= <span style="color:#1c00cf">1</span><br/> }<br/> find += <span style="color:#1c00cf">1</span><br/> <span style="color:#aa0d91">if</span>(find == -<span style="color:#1c00cf">1</span>) <span style="color:#aa0d91">return</span> -<span style="color:#1c00cf">1</span><br/> val t = arr(find)<br/> arr(find) = arr(<span style="color:#c41a16">q(find)</span>)<br/> arr(<span style="color:#c41a16">q(find)</span>) = t<br/> try {<br/> (arr.take(<span style="color:#c41a16">q(find)</span> + <span style="color:#1c00cf">1</span>) ++ arr.drop(<span style="color:#c41a16">q(find)</span> + <span style="color:#1c00cf">1</span>).sorted).foldLeft(<span style="color:#c41a16">&quot;&quot;</span>)(<span style="color:#1c00cf">_</span> + <span style="color:#1c00cf">_</span>).toInt<br/> }<br/> catch {<br/> case <span style="color:#1c00cf">_</span>: <span style="color:#c41a16">Throwable =&gt;</span> -<span style="color:#1c00cf">1</span><br/> }<br/> }<br/>}</code></pre>',_rating:0,_vector:null},{title:"LeetCode 503 Next Greater Element II",date:"2019-01-02",tags:"LeetCode 503 Next Greater Element II",extract:"Solve cyclic array using Stack",data:'<p style="text-align:start;text-indent:2em;">Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn&#x27;t exist, output -1 for this number.</p><p></p><p style="text-align:start;text-indent:2em;"><strong>Example 1:</strong><br/></p><pre><code><strong>Input:</strong> [1,2,1]<br/><strong>Output:</strong> [2,-1,2]<br/><strong>Explanation:</strong> The first 1&#x27;s next greater number is 2; <br/>The number 2 can&#x27;t find next greater number; <br/>The second 1&#x27;s next greater number needs to search circularly, which is also 2.<br/></code></pre><p style="text-align:start;text-indent:2em;"><strong>Note:</strong> The length of given array won&#x27;t exceed 10000.</p><p></p><pre><code>object Solution {<br/> def nextGreaterElements(nums: <span style="color:#5c2699">Array</span>[<span style="color:#5c2699">Int</span>]): <span style="color:#5c2699">Array</span>[<span style="color:#5c2699">Int</span>] = {<br/> import collection.mutable.Stack<br/> val stk: Stack[(<span style="color:#5c2699">Int</span>, <span style="color:#5c2699">Int</span>)] = Stack()<br/> val <span style="color:#5c2699">len</span> = nums.length<br/> <span style="color:#aa0d91">if</span>(<span style="color:#5c2699">len</span> == <span style="color:#1c00cf">0</span>) return <span style="color:#5c2699">Array</span>()<br/> val q: <span style="color:#5c2699">Array</span>[<span style="color:#5c2699">Int</span>] = <span style="color:#5c2699">Array</span>.fill(<span style="color:#5c2699">len</span>)(<span style="color:#1c00cf">-1</span>)<br/> var i = <span style="color:#1c00cf">1</span><br/> stk.push((nums(<span style="color:#1c00cf">0</span>), <span style="color:#1c00cf">0</span>))<br/> <span style="color:#aa0d91">while</span>(i &lt; <span style="color:#1c00cf">2</span> * <span style="color:#5c2699">len</span>) {<br/> <span style="color:#aa0d91">while</span> (stk.nonEmpty &amp;&amp; stk.top._1 &lt; nums(i % <span style="color:#5c2699">len</span>)) {<br/> val (_, ind) = stk.pop()<br/> <span style="color:#aa0d91">if</span>(q(ind) == <span style="color:#1c00cf">-1</span>) {<br/> q(ind) = nums(i % <span style="color:#5c2699">len</span>)<br/> }<br/> }<br/> stk.push((nums(i % <span style="color:#5c2699">len</span>), i % <span style="color:#5c2699">len</span>))<br/> i += <span style="color:#1c00cf">1</span><br/> }<br/> q<br/> }<br/>}</code></pre>',_rating:0,_vector:null},{title:"LeetCode 496 Next Greater Element I",date:"2019-01-03",tags:"LeetCode 496 Next Greater Element I",extract:"Solve dinstinct condition next greater problem",data:'<p style="text-align:start;text-indent:2em;">You are given two arrays <strong>(without duplicates)</strong> <code>nums1</code> and <code>nums2</code> where <code>nums1</code>\u2019s elements are subset of <code>nums2</code>. Find all the next greater numbers for <code>nums1</code>&#x27;s elements in the corresponding places of <code>nums2</code>. </p><p style="text-align:start;text-indent:2em;">The Next Greater Number of a number <strong>x</strong> in <code>nums1</code> is the first greater number to its right in <code>nums2</code>. If it does not exist, output -1 for this number.</p><p style="text-align:start;text-indent:2em;"><strong>Example 1:</strong><br/></p><pre><code><strong>Input:</strong> <strong>nums1</strong> = [4,1,2], <strong>nums2</strong> = [1,3,4,2].<br/><strong>Output:</strong> [-1,3,-1]<br/><strong>Explanation:</strong><br/> For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.<br/> For number 1 in the first array, the next greater number for it in the second array is 3.<br/> For number 2 in the first array, there is no next greater number for it in the second array, so output -1.<br/></code></pre><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"><strong>Example 2:</strong><br/></p><pre><code><strong>Input:</strong> <strong>nums1</strong> = [2,4], <strong>nums2</strong> = [1,2,3,4].<br/><strong>Output:</strong> [3,-1]<br/><strong>Explanation:</strong><br/> For number 2 in the first array, the next greater number for it in the second array is 3.<br/> For number 4 in the first array, there is no next greater number for it in the second array, so output -1.<br/></code></pre><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"><strong>Note:</strong><br/></p><ol><li>All elements in <code>nums1</code> and <code>nums2</code> are unique.</li><li>The length of both <code>nums1</code> and <code>nums2</code> would not exceed 1000.</li></ol><pre><code><span style="color:#aa0d91">object</span> Solution {<br/> def nextGreaterElement(nums1: Array[<span style="color:#5c2699">Int</span>], nums2: Array[<span style="color:#5c2699">Int</span>]): Array[<span style="color:#5c2699">Int</span>] = {<br/> <span style="color:#aa0d91">import</span> collection.mutable.{Map, Stack}<br/> <span style="color:#aa0d91">val</span> q: Map[<span style="color:#5c2699">Int</span>, <span style="color:#5c2699">Int</span>] = Map().withDefaultValue(-<span style="color:#1c00cf">1</span>)<br/> <span style="color:#aa0d91">val</span> stk: Stack[<span style="color:#5c2699">Int</span>] = Stack()<br/> <span style="color:#aa0d91">val</span> len = nums2.length<br/> <span style="color:#aa0d91">if</span>(len == <span style="color:#1c00cf">0</span>) <span style="color:#aa0d91">return</span> Array()<br/> stk.push(nums2(<span style="color:#1c00cf">0</span>))<br/> <span style="color:#aa0d91">var</span> i = <span style="color:#1c00cf">1</span><br/> <span style="color:#aa0d91">while</span>(i &lt; len) {<br/> <span style="color:#aa0d91">while</span>(stk.nonEmpty &amp;&amp; stk.top &lt; nums2(i)) {<br/> <span style="color:#aa0d91">val</span> j = stk.pop()<br/> q(j) = nums2(i)<br/> }<br/> stk.push(nums2(i))<br/> i += <span style="color:#1c00cf">1</span><br/> }<br/> <br/> <span style="color:#aa0d91">for</span> {<br/> i &lt;- nums1<br/> } yield q(i)<br/> }<br/>}</code></pre>',_rating:0,_vector:null},{title:"LeetCode 743 Network Delay Time",date:"2019-01-04",tags:"LeetCode 743 Network Delay Time",extract:"Dijkstra Algorithm",data:'<p style="text-align:start;text-indent:2em;">There are <code>N</code> network nodes, labelled <code>1</code> to <code>N</code>.</p><p style="text-align:start;text-indent:2em;">Given <code>times</code>, a list of travel times as <strong>directed</strong> edges <code>times[i] = (u, v, w)</code>, where <code>u</code> is the source node, <code>v</code> is the target node, and <code>w</code> is the time it takes for a signal to travel from source to target.</p><p style="text-align:start;text-indent:2em;">Now, we send a signal from a certain node <code>K</code>. How long will it take for all nodes to receive the signal? If it is impossible, return <code>-1</code>.</p><p style="text-align:start;text-indent:2em;"><strong>Note:</strong></p><ol><li><code>N</code> will be in the range <code>[1, 100]</code>.</li><li><code>K</code> will be in the range <code>[1, N]</code>.</li><li>The length of <code>times</code> will be in the range <code>[1, 6000]</code>.</li><li>All edges <code>times[i] = (u, v, w)</code> will have <code>1 &lt;= u, v &lt;= N</code> and <code>1 &lt;= w &lt;= 100</code>.</li></ol><pre><code><span style="color:#aa0d91">object</span> Solution {<br/> def networkDelayTime(times: Array[Array[<span style="color:#5c2699">Int</span>]], N: <span style="color:#5c2699">Int</span>, K: <span style="color:#5c2699">Int</span>): <span style="color:#5c2699">Int</span> = {<br/> <span style="color:#aa0d91">import</span> collection.mutable.Map<br/> <span style="color:#aa0d91">var</span> graph: Map[<span style="color:#5c2699">Int</span>, Map[<span style="color:#5c2699">Int</span>, <span style="color:#5c2699">Int</span>]] = Map().withDefaultValue(<span style="color:#aa0d91">null</span>)<br/> <span style="color:#aa0d91">for</span> {<br/> Array(u, v, w) &lt;- times<br/> } {<br/> <span style="color:#aa0d91">if</span>(graph(u) == <span style="color:#aa0d91">null</span>) {<br/> graph(u) = Map(v -&gt; w)<br/> }<br/> <span style="color:#aa0d91">else</span> {<br/> graph(u)(v) = w<br/> }<br/> }<br/> <span style="color:#aa0d91">val</span> seen = Array.fill(N)(<span style="color:#aa0d91">false</span>)<br/> <span style="color:#aa0d91">val</span> dis = Array.fill(N)(<span style="color:#5c2699">Int</span>.MaxValue)<br/> <span style="color:#aa0d91">for</span> {<br/> i &lt;- <span style="color:#1c00cf">0</span> until N<br/> } {<br/> dis(i) = <span style="color:#5c2699">Int</span>.MaxValue<br/> }<br/> seen(K - <span style="color:#1c00cf">1</span>) = <span style="color:#aa0d91">true</span><br/> dis(K - <span style="color:#1c00cf">1</span>) = <span style="color:#1c00cf">0</span><br/> <span style="color:#aa0d91">if</span>(graph(K) != <span style="color:#aa0d91">null</span>) {<br/> <span style="color:#aa0d91">for</span> {<br/> (v, w) &lt;- graph(K).toArray<br/> } {<br/> dis(v - <span style="color:#1c00cf">1</span>) = w<br/> }<br/> }<br/> <span style="color:#aa0d91">else</span> {<br/> <span style="color:#aa0d91">if</span>(N == <span style="color:#1c00cf">1</span>) <span style="color:#aa0d91">return</span> <span style="color:#1c00cf">0</span><br/> <span style="color:#aa0d91">return</span> -<span style="color:#1c00cf">1</span><br/> }<br/> <span style="color:#aa0d91">var</span> <span style="color:#aa0d91">continue</span> = <span style="color:#aa0d91">true</span><br/> <span style="color:#aa0d91">while</span>(<span style="color:#aa0d91">continue</span>) {<br/> <span style="color:#aa0d91">var</span> shortestP = -<span style="color:#1c00cf">1</span><br/> <span style="color:#aa0d91">var</span> shortestDis = <span style="color:#5c2699">Int</span>.MaxValue<br/> <span style="color:#aa0d91">for</span> {<br/> (b, ind) &lt;- seen.zipWithIndex <span style="color:#aa0d91">if</span> !b<br/> } {<br/> <span style="color:#aa0d91">if</span>(dis(ind) &lt; shortestDis) {<br/> shortestP = ind + <span style="color:#1c00cf">1</span><br/> shortestDis = dis(ind)<br/> }<br/> }<br/> <span style="color:#aa0d91">if</span>(shortestP == -<span style="color:#1c00cf">1</span>) {<br/> <span style="color:#aa0d91">continue</span> = <span style="color:#aa0d91">false</span><br/> }<br/> <span style="color:#aa0d91">else</span> {<br/> seen(shortestP - <span style="color:#1c00cf">1</span>) = <span style="color:#aa0d91">true</span><br/> dis(shortestP - <span style="color:#1c00cf">1</span>) = shortestDis<br/> <span style="color:#aa0d91">if</span>(graph(shortestP) != <span style="color:#aa0d91">null</span>) {<br/> <span style="color:#aa0d91">for</span> {<br/> (u, w) &lt;- graph(shortestP).toArray<br/> } {<br/> dis(u - <span style="color:#1c00cf">1</span>) = Math.min(dis(u - <span style="color:#1c00cf">1</span>), shortestDis + w)<br/> }<br/> }<br/> }<br/> }<br/> <span style="color:#aa0d91">val</span> ans = dis.max<br/> <span style="color:#aa0d91">if</span>(ans == <span style="color:#5c2699">Int</span>.MaxValue) <span style="color:#aa0d91">return</span> -<span style="color:#1c00cf">1</span><br/> ans<br/> }<br/>}</code></pre>',_rating:0,_vector:null},{title:"LeetCode 600 Non-negative Integers without Consecutive Ones",date:"2019-01-05",tags:"LeetCode 600 Non-negative Integers without Consecutive Ones",extract:"Fibonacci DP Problem",data:'<p style="text-align:start;text-indent:2em;">Given a positive integer n, find the number of <strong>non-negative</strong> integers less than or equal to n, whose binary representations do NOT contain <strong>consecutive ones</strong>.</p><p style="text-align:start;text-indent:2em;"><strong>Example 1:</strong><br/></p><pre><code><strong>Input:</strong> 5<br/><strong>Output:</strong> 5<br/><strong>Explanation:</strong> <br/>Here are the non-negative integers &lt;= 5 with their corresponding binary representations:<br/>0 : 0<br/>1 : 1<br/>2 : 10<br/>3 : 11<br/>4 : 100<br/>5 : 101<br/>Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule. <br/></code></pre><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"><strong>Note:</strong> 1 &lt;= n &lt;= 10<sup>9</sup></p><pre><code>object Solution {<br/> val dp: Array[Int] = Array.fill(<span style="color:#1c00cf">32</span>)(<span style="color:#1c00cf">0</span>)<br/> dp(<span style="color:#1c00cf">0</span>) = <span style="color:#1c00cf">1</span><br/> dp(<span style="color:#1c00cf">1</span>) = <span style="color:#1c00cf">2</span><br/> <span style="color:#aa0d91">for</span> {<br/> i &lt;- <span style="color:#1c00cf">2</span> to <span style="color:#1c00cf">31</span><br/> } {<br/> dp(i) = dp(i - <span style="color:#1c00cf">1</span>) + dp(i - <span style="color:#1c00cf">2</span>)<br/> }<br/> def findIntegers(num: Int): Int = {<br/> var ans = <span style="color:#1c00cf">0</span><br/> val arr: Array[Int] = num.toBinaryString.toCharArray.map(_ - <span style="color:#c41a16">&#x27;0&#x27;</span>)<br/> var i = <span style="color:#1c00cf">0</span><br/> val len = arr.length<br/> var preOne = <span style="color:#aa0d91">false</span><br/> var <span style="color:#aa0d91">continue</span> = <span style="color:#aa0d91">true</span><br/> <span style="color:#aa0d91">while</span>(i &lt; len &amp;&amp; <span style="color:#aa0d91">continue</span>) {<br/> <span style="color:#aa0d91">if</span>(arr(i) == <span style="color:#1c00cf">1</span>) {<br/> <span style="color:#aa0d91">if</span>(preOne) {<br/> ans += dp(len - i - <span style="color:#1c00cf">1</span>)<br/> <span style="color:#aa0d91">continue</span> = <span style="color:#aa0d91">false</span><br/> }<br/> <span style="color:#aa0d91">else</span> {<br/> ans += dp(len - i - <span style="color:#1c00cf">1</span>)<br/> preOne = <span style="color:#aa0d91">true</span><br/> }<br/> }<br/> <span style="color:#aa0d91">else</span> {<br/> preOne = <span style="color:#aa0d91">false</span><br/> }<br/> i += <span style="color:#1c00cf">1</span><br/> }<br/> <span style="color:#aa0d91">if</span>(i == len &amp;&amp; <span style="color:#aa0d91">continue</span>) {<br/> ans += <span style="color:#1c00cf">1</span><br/> }<br/> ans<br/> }<br/>}</code></pre>',_rating:0,_vector:null}],F=e(114);function G(t,n){for(var e=new Set(t.split(" ")),a=0,r=function(){var t=new Set(n[a].tags.split(" "));n[a]._rating=new Set(Object(F.a)(e).filter(function(n){return t.has(n)})).size};a<n.length;a++)r();return n.sort(function(t,n){return t._rating!=n._rating?n._rating-t._rating:t.date<n.date?1:-1})}function P(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: ",";\n  padding-left:",";\n  padding-right:",";\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n"]);return P=function(){return t},t}function z(){var t=Object(u.a)(["\n    border: solid 0.5px black;\n    border-radius: 4px;\n    margin-right: 10px;\n    "]);return z=function(){return t},t}function H(){var t=Object(u.a)(["\n  flex-basis: 20%;\n  flex-grow: 0;\n  margin-top: 20px;\n  background: white;\n  border-top: solid 0.5px black;\n  border-bottom: solid 0.5px black;\n  ",";\n"]);return H=function(){return t},t}function K(){var t=Object(u.a)(['\n  padding-left:50px;\n  padding-right:50px;\n  font-family: "Times New Roman";\n  padding-bottom: 50px;\n']);return K=function(){return t},t}function R(){var t=Object(u.a)(['\n  padding-left:50px;\n  display: flow;\n  font-family: "Times New Roman";\n']);return R=function(){return t},t}function B(){var t=Object(u.a)(['\n  padding-left: 50px;\n  padding-right: 50px;\n  display: inline-block;\n  font-family: "Times New Roman";\n']);return B=function(){return t},t}function V(){var t=Object(u.a)(['\n  text-align: center;\n  font-size: 20px;\n  font-family: "Times New Roman";\n  padding-top:10px;\n']);return V=function(){return t},t}var J=f.b.div(V()),U=f.b.div(B()),W=f.b.div(R()),Y=f.b.div(K()),$=f.b.div(H(),function(t){return t.toggled&&Object(f.a)(z())}),Q=f.b.div(P(),function(t){return t.toggled?"row":"column"},function(t){return t.toggled?"50px":"none"},function(t){return t.toggled?"50px":"none"}),X=function(t){var n=t.toggled,e=t.title,a=t.extract,s=t.date,o=(t._rating,Object(I.a)(t,["toggled","title","extract","date","_rating"]));return r.a.createElement($,Object.assign({toggled:n,title:e},o),r.a.createElement(S.a,{inverseFlipId:e},r.a.createElement(J,{title:e},e)),r.a.createElement(W,{title:e},s),r.a.createElement(U,{title:e},a))},Z=function(t){var n=t.title,e=t.data,a=t.date,s=t.onClick;return r.a.createElement(S.a,{flipId:n},r.a.createElement("div",{onClick:s},r.a.createElement(J,null,n),r.a.createElement(W,null,a),r.a.createElement(Y,null,e)))},tt=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(p.a)(this,Object(i.a)(n).call(this,t))).setToggle=function(){e.setState(function(t){return{toggled:!t.toggled}})},e.setFullScreen=function(t){t.preventDefault(),t.stopPropagation();var n=t.target.title;e.setState(function(t){t.isFullScreen;return{isFullScreen:n}})},e.onCancel=function(){e.setState(function(t){t.isFullScreen;return{isFullScreen:null}})},e.setSearching=function(t){e.setState({searching:t.target.value,articles:G(t.target.value,e.state.articles.slice())})},e.state={inFullScreen:null,toggled:!1,searching:"",articles:D.slice().sort(function(t,n){return n.date>t.date?1:t.date==n.date?t.title<n.date?-1:1:-1})},e}return Object(d.a)(n,t),Object(c.a)(n,[{key:"RawHTML",value:function(t){return r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t}})}},{key:"render",value:function(){var t=this;return r.a.createElement(S.b,{flipKey:this.state.searching+this.state.toggled+this.state.isFullScreen,spring:"stiff"},this.state.isFullScreen?this.state.articles.filter(function(n){return n.title==t.state.isFullScreen}).map(function(n){return r.a.createElement(Z,{key:n.title,onClick:t.onCancel,title:n.title,data:t.RawHTML(n.data),date:n.date})}):r.a.createElement("div",null,r.a.createElement(L,{onChange:this.setSearching,onClick:this.setToggle}),r.a.createElement(Q,{toggled:this.state.toggled,onClick:this.setFullScreen},this.state.articles.map(function(n){return r.a.createElement(S.a,{key:n.title,flipId:n.title,stagger:!0},r.a.createElement(X,{toggled:t.state.toggled,key:n.title,title:n.title,extract:n.extract,date:n.date,_rating:n._rating}))}))))}}]),n}(r.a.Component),nt=function(t){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,'"I am Projects TODO"')}}]),n}(r.a.Component),et=e(37),at=e.n(et),rt=e(64),st=e(28),ot=e.n(st),lt=(e(239),e(241),e(243),e(245),e(65)),ct=e.n(lt),pt=e(110),it=e.n(pt),dt=e(111),ut=e.n(dt),bt=e(112),ft=e.n(bt),yt={defaultColumns:3,defaultRows:3,syntaxs:[{name:"JavaScript",syntax:"javascript"},{name:"HTML",syntax:"html"},{name:"CSS",syntax:"css"},{name:"Java",syntax:"java"},{name:"PHP",syntax:"php"}],emoticons:lt.defaultEmoticons.map(function(t){return e(250)("./".concat(t))}),closeOnBlur:!1,closeOnSelect:!1,includeEditors:["editor-id-1"]};ot.a.use(ut()(yt)),ot.a.use(it()(yt)),ot.a.use(ft()(yt)),ot.a.use(ct()(yt));var gt=function(t){function n(){var t,e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=Object(p.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(r)))).state={editorState:null},e.submitContent=Object(rt.a)(at.a.mark(function t(){var n,a;return at.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.editorState,a=n.toHTML(),t.next=4,e.props.onSave(a,n);case 4:t.sent;case 5:case"end":return t.stop()}},t,this)})),e.handleEditorChange=function(t){e.setState({editorState:t})},e}return Object(d.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=Object(rt.a)(at.a.mark(function t(){return at.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"",this.setState({editorState:ot.a.createEditorState("",{editorId:"editor-1"})});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.editorState;return r.a.createElement("div",{className:"my-component"},r.a.createElement(ot.a,{value:t,onChange:this.handleEditorChange,onSave:this.submitContent}))}}]),n}(r.a.Component);function mt(){var t=Object(u.a)(["\n  border-bottom: solid 1px black;\n"]);return mt=function(){return t},t}var ht=f.b.div(mt()),vt=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(p.a)(this,Object(i.a)(n).call(this,t))).saveChange=function(t,n){e.setState({html:t,raw:n})},e.state={html:"",raw:""},e}return Object(d.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ht,null,this.state.html),r.a.createElement(gt,{onSave:this.saveChange}))}}]),n}(r.a.Component),xt=function(t){function n(){return Object(l.a)(this,n),Object(p.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,'"I am AboutMe TODO"')}}]),n}(r.a.Component);function wt(){var t=Object(u.a)(["\n  display: block;\n  width: 100%;\n  margin-top: 50px;\n  border-top: solid 0.5px black;\n"]);return wt=function(){return t},t}function kt(){var t=Object(u.a)(["\n  margin-top: 25px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return kt=function(){return t},t}function Et(){var t=Object(u.a)(["\n  display: inline-block;\n  font-family: 'Monoton', cursive;\n  font-size: 24px;\n  font-weight: bold;\n  margin-left: 10px;\n  color: black;\n  text-decoration: none;\n  &:hover {\n    color: gray;\n    font-weight: light;\n    cursor: pointer;\n  }\n  user-drag: none;\n"]);return Et=function(){return t},t}var Ot=f.b.div(Et()).withComponent(k.a),jt=f.b.div(kt()),It=f.b.div(wt()),St=function(t){var n=t.tabs;return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(jt,null,n.map(function(t){return r.a.createElement(Ot,{key:t,to:"/"+t},t)})),r.a.createElement(It,null,r.a.createElement(O.a,null,r.a.createElement(j.a,{path:"/Blogs",component:tt}),r.a.createElement(j.a,{path:"/Projects",component:nt}),r.a.createElement(j.a,{path:"/About me",component:xt}),r.a.createElement(j.a,{path:"/Edit",component:vt}))))))};function Ct(){var t=Object(u.a)(["\n  animation: 1s "," ease-out;\n  animation-fill-mode: forwards;\n  background: none;\n"]);return Ct=function(){return t},t}function Nt(){var t=Object(u.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return Nt=function(){return t},t}var At=["Blogs","Projects","About me"],_t=Object(f.c)(Nt()),Tt=f.b.div(Ct(),_t),Mt=function(t){t.tabsConfigs;var n=t.articles;return r.a.createElement(Tt,null,r.a.createElement(St,{tabs:At,articles:n}))},qt=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(p.a)(this,Object(i.a)(n).call(this,t))).state={isLoading:!0},e}return Object(d.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.setState({isLoading:!1})},1e3)}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(w,null):r.a.createElement(Mt,null)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(qt,null),document.getElementById("root"))}},[[116,2,1]]]);
//# sourceMappingURL=main.e4383de4.chunk.js.map