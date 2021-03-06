<a name="confirm"></a>

## confirm(content, [yes], [no], [options])
确认弹窗

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | 弹窗内容 |
| [yes] | <code>function</code> | 点击确定按钮的回调 |
| [no] | <code>function</code> | 点击取消按钮的回调 |
| [options] | <code>object</code> | 配置项 |
| [options.title] | <code>string</code> | 弹窗的标题 |
| [options.buttons] | <code>array</code> | 按钮配置项，详情参考dialog |

**Example**  
```js
weui.confirm('普通的confirm');
weui.confirm('自定义标题的confirm', { title: '自定义标题' });
weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
    title: '自定义标题'
});
weui.confirm('自定义按钮的confirm', {
    title: '自定义按钮的confirm',
    buttons: [{
        label: 'NO',
        type: 'default',
        onClick: function(){ console.log('no') }
    }, {
        label: 'YES',
        type: 'primary',
        onClick: function(){ console.log('yes') }
    }]
});
```
