//may not be needed as if we can alert method 
' use strict';

pop = () => {
    const [setClicked, clicked] = React.useState(false);
    
    if(clicked) {
        <div>
            You have clicked the elements 
        </div>
    }

    return React.createElement(
        'button',
        {
            onClick: () => setClicked(true),
        },
        'Here is some help'
    )
}

const rootNode = document.getElementById('pop-root');
const root = ReactDom.createRoot(rootNode);
root.render(React.createElement(pop));

export {pop, rootNode, root};
