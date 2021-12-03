import React from "react";
import InputText from "./input/InputText"
import InputSelect from "./input/InputSelect";
import InputCheckbox from "./input/InputCheckbox";
import { sizeOptions, sizeTypeOptions, dateOptions, searchOptions } from "./constHelper";

class FilterForm extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           fromQuery: '',
           toQuery: '',
           subject: '',
           HtW: '',
           DnH: '',
           attachment: false,
           chart: false,
           size: sizeOptions[0].value,
           sizeType: sizeTypeOptions[0].value,
           date: dateOptions[0].value,
           search: searchOptions[0].value,
           mailSize: 0
       }
       this.handleFromQueryChange = this.handleFromQueryChange.bind(this)
       this.handleToQueryChange = this.handleToQueryChange.bind(this)
       this.handleSubjectQueryChange = this.handleSubjectQueryChange.bind(this)
       this.handleHtWQueryChange = this.handleHtWQueryChange.bind(this)
       this.handleDnHQueryChange = this.handleDnHQueryChange.bind(this)
       this.handleAttachmentChange = this.handleAttachmentChange.bind(this)
       this.handleChartChange = this.handleChartChange.bind(this)
       this.handleSizeChange =  this.handleSizeChange.bind(this)
       this.handleSizeTypeChange =  this.handleSizeTypeChange.bind(this)
       this.handleDateChange =  this.handleDateChange.bind(this)
       this.handleSearchChange =  this.handleSearchChange.bind(this)
       this.handleMailSizeChange = this.handleMailSizeChange.bind(this)
   } 

   handleFromQueryChange(query) {
       this.setState({ fromQuery: query })
   }
   handleToQueryChange(query) {
       this.setState({ toQuery: query })
   }
   handleSubjectQueryChange(query) {
       this.setState({ subject: query })
   }
   handleHtWQueryChange(query) {
       this.setState({ HtW: query })
   }
   handleDnHQueryChange(query) {
       this.setState({ DnH: query })
   }
   handleAttachmentChange(query) {
       this.setState({ attachment: query})
   }
   handleChartChange(query) {
       this.setState({ chart: query})
   }
   handleSizeChange(query) {
       this.setState({ size: query})
   }
   handleSizeTypeChange(query) {
       this.setState({ sizeType: query})
   }
   handleDateChange(query) {
       this.setState({ date: query})
   }
   handleSearchChange(query) {
       this.setState({ search: query})
   }
   handleMailSizeChange(query) {
       let val = query.target.value
       this.setState({ mailSize: val })
   }
   render() {
       return (
           <div>
               <form>
                   <InputText label="From" handleTextChange={this.handleFromQueryChange} query={this.state.fromQuery}/> 
                   <InputText label="To" handleTextChange={this.handleToQueryChange} query={this.state.toQuery}/> 
                   <InputText label="Subject" handleTextChange={this.handleSubjectQueryChange} query={this.state.subject}/> 
                   <InputText label="Has the words" handleTextChange={this.handleHtWQueryChange} query={this.state.HtW}/> 
                   <InputText label="Doesn't have" handleTextChange={this.handleDnHQueryChange} query={this.state.DnH}/> 
                   <div>
                       <InputSelect label="Size" options={sizeOptions} handleSelectChange={this.handleSizeChange}></InputSelect> 
                       <input type="text" onChange={this.handleMailSizeChange} value={this.state.mailSize}></input>
                       <InputSelect options={sizeTypeOptions} handleSelectChange={this.handleSizeTypeChange}></InputSelect> 
                   </div>
                   <div>
                       <InputSelect label="Date within" options={dateOptions} handleSelectChange={this.handleDateChange}></InputSelect> 
                   </div>
                   <div>
                       <InputSelect label="Search" options={searchOptions} handleSelectChange={this.handleSearchChange}></InputSelect> 
                   </div>
                   <div>
                       <InputCheckbox label="Has attachment" handleCheckboxChange={this.handleAttachmentChange}></InputCheckbox> 
                       <InputCheckbox label="Don't include chart" handleCheckboxChange={this.handleChartChange}></InputCheckbox> 
                   </div>
               </form>
           </div>
       )
   }
}
export default FilterForm