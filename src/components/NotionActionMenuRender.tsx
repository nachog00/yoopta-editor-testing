// components/NotionActionMenuRender

// import types for custom render props. It helps you
// components/NotionActionMenuRender
// import types for custom render props. It helps you
import type { ActionMenuRenderProps } from '@yoopta/action-menu-list';

const ActionNotionMenuExample = (props: ActionMenuRenderProps) => {
  /** 
    empty: boolean when any action nof founded.
    TS: boolean
    
    getRootProps: required attrs list of actions element. 
    TS: () => void
    
    getItemProps: required attrs for every action item element.
    TS: (type: string) => void
    
    actions: your actions to render.
    TS: {
      type: string;
      title: string;
      description?: string;
      icon?: string | ReactNode | ReactElement;
    }[]

    view: useful prop for choosing how to render your UI in different cases.
    When user open action menu from  
    TS: 'small' | 'default'
  */
  const {
    empty,
    getItemProps,
    actions,
    getRootProps,
    view
  } = props;

  // THIS IS PSEUDOCODE
  return (
    <ul {...getRootProps()}> 
      {empty && <li>List is empty!</li>}
      {actions.map(action => {
        <li key={action.type}>
          <button {...getItemProps}>{action.title}</button>
        </li>
      })}
    </ul>
  )
}
export { ActionNotionMenuExample };