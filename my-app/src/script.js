
            // カウンター指定
            let counter = 0;
            // セレクタ指定
            let dom = document.querySelector('#root')
            // 関数実行
            doCount()

function doCount(){
    counter++
    let element = React.createElement(
        'div', {}, [
            React.createElement(
                'h2', {} , "Hello"
            ),
            React.createElement(
                'h4', {className: 'alert alert-primary'} , "Hello"
            ),
            
            React.createElement(
                'ul', {className: 'list-group'} , [
                    React.createElement(
                        'li', {className: 'list-group-item'} , "First Item"
                    ),
                    
                    React.createElement(
                        'li', {className: 'list-group-item'} , "Second Item"
                    ),
                    
                    React.createElement(
                        'li', {className: 'list-group-item'} , "Third Item"
                    ),
                ]
            ),
        ]
    )
    // レンダリング
    ReactDOM.render(element, dom)
}