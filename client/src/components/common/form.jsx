import { Label } from "@radix-ui/react-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function CommonForm(formControls){

  function renderInputsByComponentType(getControlItem){
    let element = null;
    switch(getControlItem.componentType){
      case 'input':
        element =(
          <Input
            name={getControlItem.name}
            placeholder = {getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
      break;

      case 'select':
        element =(
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder}/>
            </SelectTrigger>
            <SelectContent>
              {
                getControlItem.options && 
                getControlItem.options.length > 0 ?
                getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
              }
            </SelectContent>
          </Select>
        );
      break;

      case 'textarea':
        element =(
          <Textarea>
            name= {getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
          </Textarea>
        );
      break;
  
      default:
        element =(
          <Input 
            name={getControlItem.name}
            placeholder = {getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
        break;

    }
    return element;
  }

  return(
    <form action="">
      <div className="flex flex-col gap-3">
        {
          formControls.map(controlItem=> <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className='mb-1'>{controlItem.label}</Label>
            {
              renderInputsByComponentType(controlItem)
            }
          </div>)

        }
      </div>
    </form>
  )
}

export default CommonForm;