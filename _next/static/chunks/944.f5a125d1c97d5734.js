"use strict";(globalThis.webpackChunk_N_E=globalThis.webpackChunk_N_E||[]).push([[944],{944:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var i=[Object.freeze({displayName:"Nix",fileTypes:["nix"],name:"nix",patterns:[{include:"#expression"}],repository:{"attribute-bind":{patterns:[{include:"#attribute-name"},{include:"#attribute-bind-from-equals"}]},"attribute-bind-from-equals":{begin:"\\=",beginCaptures:{0:{name:"keyword.operator.bind.nix"}},end:"\\;",endCaptures:{0:{name:"punctuation.terminator.bind.nix"}},patterns:[{include:"#expression"}]},"attribute-inherit":{begin:"\\binherit\\b",beginCaptures:{0:{name:"keyword.other.inherit.nix"}},end:"\\;",endCaptures:{0:{name:"punctuation.terminator.inherit.nix"}},patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.function.arguments.nix"}},end:"(?=\\;)",patterns:[{begin:"\\)",beginCaptures:{0:{name:"punctuation.section.function.arguments.nix"}},end:"(?=\\;)",patterns:[{include:"#bad-reserved"},{include:"#attribute-name-single"},{include:"#others"}]},{include:"#expression"}]},{begin:"(?=[a-zA-Z\\_])",end:"(?=\\;)",patterns:[{include:"#bad-reserved"},{include:"#attribute-name-single"},{include:"#others"}]},{include:"#others"}]},"attribute-name":{patterns:[{match:"\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*",name:"entity.other.attribute-name.multipart.nix"},{match:"\\."},{include:"#string-quoted"},{include:"#interpolation"}]},"attribute-name-single":{match:"\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*",name:"entity.other.attribute-name.single.nix"},"attrset-contents":{patterns:[{include:"#attribute-inherit"},{include:"#bad-reserved"},{include:"#attribute-bind"},{include:"#others"}]},"attrset-definition":{begin:"(?=\\{)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{begin:"(\\{)",beginCaptures:{0:{name:"punctuation.definition.attrset.nix"}},end:"(\\})",endCaptures:{0:{name:"punctuation.definition.attrset.nix"}},patterns:[{include:"#attrset-contents"}]},{begin:"(?<=\\})",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]}]},"attrset-definition-brace-opened":{patterns:[{begin:"(?<=\\})",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]},{begin:"(?=.?)",end:"\\}",endCaptures:{0:{name:"punctuation.definition.attrset.nix"}},patterns:[{include:"#attrset-contents"}]}]},"attrset-for-sure":{patterns:[{begin:"(?=\\brec\\b)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{begin:"\\brec\\b",beginCaptures:{0:{name:"keyword.other.nix"}},end:"(?=\\{)",patterns:[{include:"#others"}]},{include:"#attrset-definition"},{include:"#others"}]},{begin:"(?=\\{\\s*(\\}|[^,?]*(=|;)))",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#attrset-definition"},{include:"#others"}]}]},"attrset-or-function":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.attrset-or-function.nix"}},end:"(?=([\\])};]|\\b(else|then)\\b))",patterns:[{begin:"(?=(\\s*\\}|\\\"|\\\binherit\\\b|\\$\\{|\\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*(\\s*\\.|\\s*=[^=])))",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#attrset-definition-brace-opened"}]},{begin:"(?=(\\.\\.\\.|\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*\\s*[,?]))",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#function-definition-brace-opened"}]},{include:"#bad-reserved"},{begin:"\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*",beginCaptures:{0:{name:"variable.parameter.function.maybe.nix"}},end:"(?=([\\])};]|\\b(else|then)\\b))",patterns:[{begin:"(?=\\.)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#attrset-definition-brace-opened"}]},{begin:"\\s*(\\,)",beginCaptures:{1:{name:"keyword.operator.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#function-definition-brace-opened"}]},{begin:"(?=\\=)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#attribute-bind-from-equals"},{include:"#attrset-definition-brace-opened"}]},{begin:"(?=\\?)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#function-parameter-default"},{begin:"\\,",beginCaptures:{0:{name:"keyword.operator.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#function-definition-brace-opened"}]}]},{include:"#others"}]},{include:"#others"}]},"bad-reserved":{match:"(?<![\\w'-])(if|then|else|assert|with|let|in|rec|inherit)(?![\\w'-])",name:"invalid.illegal.reserved.nix"},comment:{patterns:[{begin:"/\\*([^*]|\\*[^\\/])*",end:"\\*\\/",name:"comment.block.nix",patterns:[{include:"#comment-remark"}]},{begin:"\\#",end:"$",name:"comment.line.number-sign.nix",patterns:[{include:"#comment-remark"}]}]},"comment-remark":{captures:{1:{name:"markup.bold.comment.nix"}},match:"(TODO|FIXME|BUG|\\!\\!\\!):?"},constants:{patterns:[{begin:"\\b(builtins|true|false|null)\\b",beginCaptures:{0:{name:"constant.language.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]},{begin:"\\b(scopedImport|import|isNull|abort|throw|baseNameOf|dirOf|removeAttrs|map|toString|derivationStrict|derivation)\\b",beginCaptures:{0:{name:"support.function.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]},{begin:"\\b[0-9]+\\b",beginCaptures:{0:{name:"constant.numeric.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]}]},expression:{patterns:[{include:"#parens-and-cont"},{include:"#list-and-cont"},{include:"#string"},{include:"#interpolation"},{include:"#with-assert"},{include:"#function-for-sure"},{include:"#attrset-for-sure"},{include:"#attrset-or-function"},{include:"#let"},{include:"#if"},{include:"#operator-unary"},{include:"#constants"},{include:"#bad-reserved"},{include:"#parameter-name-and-cont"},{include:"#others"}]},"expression-cont":{begin:"(?=.?)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#parens"},{include:"#list"},{include:"#string"},{include:"#interpolation"},{include:"#function-for-sure"},{include:"#attrset-for-sure"},{include:"#attrset-or-function"},{match:"(\\bor\\b|\\.|==|!=|!|\\<\\=|\\<|\\>\\=|\\>|&&|\\|\\||-\\>|//|\\?|\\+\\+|-|\\*|/(?=([^*]|$))|\\+)",name:"keyword.operator.nix"},{include:"#constants"},{include:"#bad-reserved"},{include:"#parameter-name"},{include:"#others"}]},"function-body":{begin:"(@\\s*([a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*)\\s*)?(\\:)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression"}]},"function-body-from-colon":{begin:"(\\:)",beginCaptures:{0:{name:"punctuation.definition.function.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression"}]},"function-contents":{patterns:[{include:"#bad-reserved"},{include:"#function-parameter"},{include:"#others"}]},"function-definition":{begin:"(?=.?)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#function-body-from-colon"},{begin:"(?=.?)",end:"(?=\\:)",patterns:[{begin:"(\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*)",beginCaptures:{0:{name:"variable.parameter.function.4.nix"}},end:"(?=\\:)",patterns:[{begin:"\\@",end:"(?=\\:)",patterns:[{include:"#function-header-until-colon-no-arg"},{include:"#others"}]},{include:"#others"}]},{begin:"(?=\\{)",end:"(?=\\:)",patterns:[{include:"#function-header-until-colon-with-arg"}]}]},{include:"#others"}]},"function-definition-brace-opened":{begin:"(?=.?)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#function-body-from-colon"},{begin:"(?=.?)",end:"(?=\\:)",patterns:[{include:"#function-header-close-brace-with-arg"},{begin:"(?=.?)",end:"(?=\\})",patterns:[{include:"#function-contents"}]}]},{include:"#others"}]},"function-for-sure":{patterns:[{begin:"(?=(\\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*\\s*[:@]|\\{[^}]*\\}\\s*:|\\{[^#}\"'/=]*[,\\?]))",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#function-definition"}]}]},"function-header-close-brace-no-arg":{begin:"\\}",beginCaptures:{0:{name:"punctuation.definition.entity.function.nix"}},end:"(?=\\:)",patterns:[{include:"#others"}]},"function-header-close-brace-with-arg":{begin:"\\}",beginCaptures:{0:{name:"punctuation.definition.entity.function.nix"}},end:"(?=\\:)",patterns:[{include:"#function-header-terminal-arg"},{include:"#others"}]},"function-header-open-brace":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.entity.function.2.nix"}},end:"(?=\\})",patterns:[{include:"#function-contents"}]},"function-header-terminal-arg":{begin:"(?=@)",end:"(?=\\:)",patterns:[{begin:"\\@",end:"(?=\\:)",patterns:[{begin:"(\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*)",end:"(?=\\:)",name:"variable.parameter.function.3.nix"},{include:"#others"}]},{include:"#others"}]},"function-header-until-colon-no-arg":{begin:"(?=\\{)",end:"(?=\\:)",patterns:[{include:"#function-header-open-brace"},{include:"#function-header-close-brace-no-arg"}]},"function-header-until-colon-with-arg":{begin:"(?=\\{)",end:"(?=\\:)",patterns:[{include:"#function-header-open-brace"},{include:"#function-header-close-brace-with-arg"}]},"function-parameter":{patterns:[{begin:"(\\.\\.\\.)",end:"(,|(?=\\}))",name:"keyword.operator.nix",patterns:[{include:"#others"}]},{begin:"\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*",beginCaptures:{0:{name:"variable.parameter.function.1.nix"}},end:"(,|(?=\\}))",endCaptures:{0:{name:"keyword.operator.nix"}},patterns:[{include:"#whitespace"},{include:"#comment"},{include:"#function-parameter-default"},{include:"#expression"}]},{include:"#others"}]},"function-parameter-default":{begin:"\\?",beginCaptures:{0:{name:"keyword.operator.nix"}},end:"(?=[,}])",patterns:[{include:"#expression"}]},if:{begin:"(?=\\bif\\b)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{begin:"\\bif\\b",beginCaptures:{0:{name:"keyword.other.nix"}},end:"\\bth(?=en\\b)",endCaptures:{0:{name:"keyword.other.nix"}},patterns:[{include:"#expression"}]},{begin:"(?<=th)en\\b",beginCaptures:{0:{name:"keyword.other.nix"}},end:"\\bel(?=se\\b)",endCaptures:{0:{name:"keyword.other.nix"}},patterns:[{include:"#expression"}]},{begin:"(?<=el)se\\b",beginCaptures:{0:{name:"keyword.other.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",endCaptures:{0:{name:"keyword.other.nix"}},patterns:[{include:"#expression"}]}]},illegal:{match:".",name:"invalid.illegal"},interpolation:{begin:"\\$\\{",beginCaptures:{0:{name:"punctuation.section.embedded.begin.nix"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.embedded.end.nix"}},name:"meta.embedded",patterns:[{include:"#expression"}]},let:{begin:"(?=\\blet\\b)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{begin:"\\blet\\b",beginCaptures:{0:{name:"keyword.other.nix"}},end:"(?=([\\])};,]|\\b(in|else|then)\\b))",patterns:[{begin:"(?=\\{)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{begin:"\\{",end:"\\}",patterns:[{include:"#attrset-contents"}]},{begin:"(^|(?<=\\}))",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]},{include:"#others"}]},{include:"#attrset-contents"},{include:"#others"}]},{begin:"\\bin\\b",beginCaptures:{0:{name:"keyword.other.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression"}]}]},list:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.list.nix"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.list.nix"}},patterns:[{include:"#expression"}]},"list-and-cont":{begin:"(?=\\[)",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#list"},{include:"#expression-cont"}]},"operator-unary":{match:"(!|-)",name:"keyword.operator.unary.nix"},others:{patterns:[{include:"#whitespace"},{include:"#comment"},{include:"#illegal"}]},"parameter-name":{captures:{0:{name:"variable.parameter.name.nix"}},match:"\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*"},"parameter-name-and-cont":{begin:"\\b[a-zA-Z\\_][a-zA-Z0-9\\_\\'\\-]*",beginCaptures:{0:{name:"variable.parameter.name.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]},parens:{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.expression.nix"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.expression.nix"}},patterns:[{include:"#expression"}]},"parens-and-cont":{begin:"(?=\\()",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#parens"},{include:"#expression-cont"}]},string:{patterns:[{begin:"(?=\\'\\')",end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{begin:"\\'\\'",beginCaptures:{0:{name:"punctuation.definition.string.other.start.nix"}},end:"\\'\\'(?!\\$|\\'|\\\\.)",endCaptures:{0:{name:"punctuation.definition.string.other.end.nix"}},name:"string.quoted.other.nix",patterns:[{match:"\\'\\'(\\$|\\'|\\\\.)",name:"constant.character.escape.nix"},{include:"#interpolation"}]},{include:"#expression-cont"}]},{begin:'(?=\\")',end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#string-quoted"},{include:"#expression-cont"}]},{begin:"(~?[a-zA-Z0-9\\.\\_\\-\\+]*(\\/[a-zA-Z0-9\\.\\_\\-\\+]+)+)",beginCaptures:{0:{name:"string.unquoted.path.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]},{begin:"(\\<[a-zA-Z0-9\\.\\_\\-\\+]+(\\/[a-zA-Z0-9\\.\\_\\-\\+]+)*\\>)",beginCaptures:{0:{name:"string.unquoted.spath.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]},{begin:"([a-zA-Z][a-zA-Z0-9\\+\\-\\.]*\\:[a-zA-Z0-9\\%\\/\\?\\:\\@\\&\\=\\+\\$\\,\\-\\_\\.\\!\\~\\*\\']+)",beginCaptures:{0:{name:"string.unquoted.url.nix"}},end:"(?=([\\])};,]|\\b(else|then)\\b))",patterns:[{include:"#expression-cont"}]}]},"string-quoted":{begin:'\\"',beginCaptures:{0:{name:"punctuation.definition.string.double.start.nix"}},end:'\\"',endCaptures:{0:{name:"punctuation.definition.string.double.end.nix"}},name:"string.quoted.double.nix",patterns:[{match:"\\\\.",name:"constant.character.escape.nix"},{include:"#interpolation"}]},whitespace:{match:"\\s+"},"with-assert":{begin:"(?<![\\w'-])(with|assert)(?![\\w'-])",beginCaptures:{0:{name:"keyword.other.nix"}},end:"\\;",patterns:[{include:"#expression"}]}},scopeName:"source.nix"})]}}]);
//# sourceMappingURL=944.f5a125d1c97d5734.js.map