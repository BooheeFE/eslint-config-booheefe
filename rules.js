module.exports = {
  // setter必须有对应的getter，getter可以没有对应的setter,使用错误级别的错误
  'accessor-pairs': 2,
  // 数组的括号内的前后禁止有空格
  'array-bracket-spacing': 0,
  // 将var定义的变量视为块作用域，允许在块外使用
  'block-scoped-var': 0,  
  // 大括号放在控制语句或声明语句同一行的位置,允许块的开括号和闭括号在同一行
  'brace-style': [2, '1tbs', { 'allowSingleLine': true }],  
  // 强制使用驼峰命名，属性名称不做校验
  'camelcase': [2, {"properties": "never"}],
  // 禁止末尾逗号 
  'comma-dangle': [2, 'never'], 
  // 禁止在逗号前使用空格,要求在逗号后使用一个或多个空格 
  'comma-spacing': [2, { 'before': false, 'after': true }], 
  // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
  'comma-style': [2, 'last'], 
  // 不限制圈复杂度
  'complexity': 0, 
  // 不强制在计算属性中使用空格
  'computed-property-spacing': 0, 
  // 不要求使用一致的 return 语句
  'consistent-return': 0,
  // 不强制要求一致的 This
  'consistent-this': 0,
  // 强制验证在构造函数中有super()的调用
  // 派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()
  'constructor-super': 2,
  // 强制要求代码块使用大括号包裹
  // 'multi-line'选项下允许在单行中省略大括号，而if、else if、else、for、while 和 do，在其他使用中依然会强制使用大括号
  'curly': [2, 'multi-line'],
  // 强制要求所有的 switch 语句中必须包含 default 分支
  'default-case': 2,
  // 强制在点号之前或之后换行，选项 "property" 要求点操作符和属性放在同一行
  'dot-location': [2, 'property'],
  // 不强制要求使用点号
  'dot-notation': 0,
  // 禁止在非空文件末尾存在一行空行
  'eol-last': [2, 'never'],
  // 使用类型安全的 === 和 !== 操作符代替 == 和 != 操作
  // 'allow-null'选项这将告诉 ESLint 除了与 null 字面量进行比较时，总是强制使用绝对相等
  'eqeqeq': [2, 'allow-null'],
  // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动 
  'for-direction': 2,
  // 不强制要求函数表达式命名
  'func-names': 0,
  // 不强制在一个 JavaScript 文件中强制使用一种特定的 function 风格：函数声明或函数表达式
  'func-style': 0,
  // 强制 generator 函数中 * 号周围有空格
  // before 强制在 * 和 function 关键字之间有空格，after 强制在 * 和函数名之间有空格
  'generator-star-spacing': [2, { 'before': false, 'after': true }],
  // 强制在 getter 属性中出现一个 return 语句 
  'getter-return': 2,
  // 强制在 yield* 表达式中 * 周围使用空格
  // before 强制在 yield 和 * 之间有空格，after 强制在 * 和 参数之间有空格
  'yield-star-spacing': [2, { 'before': true, 'after': false }],
  // 不强制要求 for-in 循环中有一个 if 语句
  'guard-for-in': 0,
  // 建议使用一致的缩进，2个空格缩进，强制 switch 语句中的 case 子句的缩进级别
  'indent': [1, 2, { 'SwitchCase': 1 }],
  // 强制在对象字面量的键和值之间使用一致的空格
  // ‘beforeColon’禁止在对象字面量的键和冒号之间存在空格，'afterColon'要求在对象字面量的冒号和值之间存在至少有一个空格
  'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
  // 不强制使用一致的换行符风格
  'linebreak-style': 0,
  // 不强制注释周围有空行
  'lines-around-comment': 0,
  //不强制回调函数最大嵌套深度
  'max-nested-callbacks': 0,
  // 要求构造函数首字母大写
  // "newIsCap"选项要求调用 new 操作符时有首字母大小的函数，"capIsNew"选项不要求调用首字母大写的函数时有 new 操作符
  'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
  // 要求调用无参构造函数时带括号
  'new-parens': 2,
  // 不要求变量声明语句后有一行空行
  'newline-after-var': 0,
  // 禁用 Alert
  'no-alert': 2,
  // 禁止使用 Array 构造函数
  'no-array-constructor': 2,
  // 禁用 caller 或 callee
  'no-caller': 2,
  // 不禁止 catch 子句的参数与外层作用域中的变量同名
  'no-catch-shadow': 0,
  // 禁止在条件语句中出现赋值操作符
  'no-cond-assign': 2,
  // 不禁用console
  'no-console': 0,
  // 不禁止在条件中使用常量表达式
  'no-constant-condition': 0,
  // 不禁用 continue 语句
  'no-continue': 0,
  // 禁止在正则表达式中出现控制字符
  'no-control-regex': 2,
  // 禁用 debugger
  'no-debugger': 2,
  // 禁止删除变量
  'no-delete-var': 2,
  // 不禁止使用看起来像除法的正则表达式
  'no-div-regex': 0,
  //禁止在 function 定义中出现重复的参数 
  'no-dupe-args': 2,
  // 禁止在对象字面量中出现重复的键
  'no-dupe-keys': 2,
  // 禁止出现重复的 case 标签
  'no-duplicate-case': 2,
  // 不禁止 if 语句中 return 语句之后有 else 块
  'no-else-return': 0,
  // 不禁止出现空语句块
  'no-empty': 0,
  // 禁止在正则表达式中使用空字符集
  'no-empty-character-class': 2,
  // 与 null 进行比较，不强制进行操作符类型检查
  'no-eq-null': 0,
  // 禁用 eval()
  'no-eval': 2,
  // 禁止对 catch 子句中的异常重新赋值
  'no-ex-assign': 2,
  // 禁止扩展原生对象
  'no-extend-native': [2, { 'exceptions': ['Promise', 'Date'] }],
  // 禁止不必要的 .bind()函数绑定
  'no-extra-bind': 2,
  // 禁止不必要的布尔转换
  'no-extra-boolean-cast': 2,
  // 不限制使用不必要的括号
  'no-extra-parens': 0,
  // 不限制使用不必要的分号
  'no-extra-semi': 2,
  // 禁止 case 语句落空
  'no-fallthrough': 2,
  // 禁止数字字面量中使用前导和末尾小数点
  'no-floating-decimal': 2,
  // 禁止对 function 声明重新赋值
  'no-func-assign': 2,
  // 禁止使用类似 eval() 的方法
  'no-implied-eval': 2,
  // 不禁止在代码后使用内联注释
  'no-inline-comments': 0,
  // 禁止在嵌套的语句块中出现变量或 function 声明
  'no-inner-declarations': [2, 'functions'],
  // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
  'no-invalid-regexp': 2,
  // 禁止不规则的空白
  'no-irregular-whitespace': 2,
  // 禁用 __iterator__ 属性
  'no-iterator': 2,
  // 禁止使用同一作用域下的同名的变量做为标签
  'no-label-var': 2,
  // 不禁用标签语句
  'no-labels': 0,
  // 禁用不必要的嵌套块
  'no-lone-blocks': 2,
  // 不禁止 if 语句作为唯一语句出现在 else 语句块中
  'no-lonely-if': 0,
  // 不禁止循环中存在函数
  'no-loop-func': 0,
  // 不禁止 require 调用与普通变量声明混合使用
  'no-mixed-requires': 0,
  // 禁止使用 空格 和 tab 混合缩进
  'no-mixed-spaces-and-tabs': 2,
  // 建议不要出现多个空格
  'no-multi-spaces': 1,
  // 不禁止多行字符串
  'no-multi-str': 0,
  // 建议不要多个空行，最大连续空行为1行
  'no-multiple-empty-lines': [1, { 'max': 1 }],
  // 不能重写native对象
  'no-native-reassign': 2,
  // in 操作符的左边不能有!
  'no-negated-in-lhs': 2,
  // 不禁止使用嵌套的三目运算
  'no-nested-ternary': 0,
  // 不禁止在使用new构造一个实例后不赋值
  'no-new': 0,
  // 可以使用new Function
  'no-new-func': 0,
  // 禁止使用new Object()
  'no-new-object': 2,
  // 禁止使用new require
  'no-new-require': 2,
  // 禁止对 String，Number 和 Boolean 使用 new 操作符
  'no-new-wrappers': 2,
  // 禁止将全局对象当作函数进行调用
  'no-obj-calls': 2,
  // 禁用八进制字面量
  'no-octal': 2,
  // 禁止使用八进制转义序列
  'no-octal-escape': 2,
  // 不禁止给参数重新赋值
  'no-param-reassign': 0,
  // 可以使用 _dirname 和 _filename 进行字符串拼接
  'no-path-concat': 0,
  // 不禁用 process.env
  'no-process-env': 0,
  // 不禁用 process.exit()
  'no-process-exit': 0,
  // 不禁用__proto__属性
  'no-proto': 0,
  // 禁止重新声明变量
  'no-redeclare': 2,
  // 禁止正则表达式字面量中出现多个空格
  'no-regex-spaces': 2,
  // 不禁止 Node.js 模块
  'no-restricted-modules': 0,
  // 禁止在返回语句中赋值
  'no-return-assign': 2,
  // 允许在链接地址中使用 javascript:(url)
  'no-script-url': 0,
  // 允许自身比较
  'no-self-compare': 0,
  // 允许使用逗号操作符
  'no-sequences': 2,
  // 允许变量声明覆盖外层作用域的变量
  'no-shadow': 0,
  // 禁止关键字被遮蔽
  'no-shadow-restricted-names': 2,
  // 函数调用时 函数名与()之间不能有空格
  'no-spaced-func': 2,
  // 禁止稀疏数组， [1,,2]
  'no-sparse-arrays': 2,
  // 允许使用同步方法
  'no-sync': 0,
  // 允许使用三元操作符
  'no-ternary': 0,
  // 在构造函数中禁止在调用super()之前使用this或super
  'no-this-before-super': 2,
  // 限制可以被抛出的异常
  'no-throw-literal': 2,
  // 不建议行尾空白
  'no-trailing-spaces': 1,
  // 禁用未声明的变量
  'no-undef': 2,
  // 禁止许初始化变量值为 undefined
  'no-undef-init': 2,
  // 允许使用undefined变量
  'no-undefined': 0,
  // 允许标识符中有悬空下划线
  'no-underscore-dangle': 0,
  // 禁止使用令人困惑的多行表达式
  'no-unexpected-multiline': 2,
  // 禁止可以表达为更简单结构的三元操作符
  'no-unneeded-ternary': 2,
  // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
  'no-unreachable': 2,
  // 允许未使用过的表达式
  'no-unused-expressions': 0,
  //不建议出现未使用过的变量 
  'no-unused-vars': [1],
  // 允许定义前使用变量
  'no-use-before-define': 0,
  // 要求使用 let 或 const 而不是 var
  'no-var': 2,
  // 允许使用void
  'no-void': 0,
  // 禁用警告注释
  'no-warning-comments': 0,
  // 禁用with语句
  'no-with': 2,
  // 强制同行对象中花括号前后都有空格
  'object-curly-spacing': [2, "always"],
  // 要求对象字面量简写语法
  'object-shorthand': 0,
  // 对于函数中的变量在一起声明或分开声明不做要求
  'one-var': 0,
  // 允许不用简化赋值操作
  'operator-assignment': 0,
  // 强制操作符使用一致的换行符风格，要求把换行符放在操作符后面
  'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
  // 允许块内填充，可以有空行
  'padded-blocks': 0,
  // 允许不适用const
  'prefer-const': [1, { 'destructuring': 'any', 'ignoreReadBeforeAssign': false }],
  // 允许对象字面量属性名称使用引号
  'quote-props': 0,
  // 强制使用一致的反勾号、双引号或单引号，要求尽可能地使用单引号，
  'quotes': [2, 'single'],
  // 当使用parseInt()函数时，要求必须要有第二个参数：基数
  'radix': [2, 'as-needed'],
  // 禁止使用分号代替 ASI，要求在语句末尾使用分号，"omitLastInOneLineBlock": true 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
  'semi': [2, 'always' ,{ 'omitLastInOneLineBlock': true }],
  // 不强制分号前后有空格
  'semi-spacing': 0,
  // 不要求同一个声明块中的变量按顺序排列
  'sort-vars': 0,
  // 强制关键字周围有空格
  'keyword-spacing': 2,
  // 要求语句块之前的空格，"always"表示块语句必须总是至少有一个前置空格
  'space-before-blocks': [2, 'always'],
  // 要求函数圆括号之前有一个空格，never 禁止在参数的 ( 前面有空格
  'space-before-function-paren': [2, 'never'],
  // 禁止圆括号内有一致的空格，'never'强制在圆括号内没有空格
  'space-in-parens': [2, 'never'],
  // 要求中缀操作符周围有空格
  'space-infix-ops': 2,
  // 在一元操作符之前或之后存在空格，适用于单词类一元操作符，不适用于这些一元操作符: -、+、--、++、!、!!
  'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
  // 要求在注释前有空白
  // always"表示// 或 /* 必须跟随至少一个空白
  // "markers"的值是一个字符串形式的数组，这些字符串也就是块级注释的标记，
  // 例如一个额外的 /，被用来表示是由 doxygen、vsdoc 等系统读取的文档，这些系统必须有额外的字符。 不管第一个参数是 "always" 还是 "never"、"markers"数组都会起作用。
  'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'] }],
  // 不要求使用严格模式指令
  'strict': 0,
  // 强制模板字符串中花括号前后没有空格
  "template-curly-spacing": [2, "never"],
  // 要求调用 isNaN()检查 NaN 
  'use-isnan': 2,
  // 不强制使用有效的 JSDoc 注释
  'valid-jsdoc': 0,
  // 强制 typeof 表达式与有效的字符串进行比较 
  'valid-typeof': 2,
  // 要求将var变量声明放在它们作用域的顶部
  'vars-on-top': 0,
  // 需要把立即执行的函数包裹起来
  // "any"强制总是包裹，但允许其它风格
  'wrap-iife': [2, 'any'],
  // 不要求正则表达式被括号括起来
  'wrap-regex': 0,
  // 禁止yoda条件
  'yoda': [2, 'never']
};