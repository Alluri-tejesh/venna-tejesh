let dataset_count=0
let add_row=0

function datset_add() {
let dataset_attr_1=["- name:","load_type:","file_input_source:","file_output_target:","file_format:","files_have_header_row","dialect","destination",]
let dataset_attr_2=["source_buckets","naming_pattern","source_prefixes","target_buckets","target_prefix","delimiter","quote_char","custom_datalake_bucket","datalake_root_directory","custom_vertica_batch_credentials","staging_schema","schema","table"]
let dataset_attr_3=["dev","qa","prod"]
const add_datset=document.getElementById("add_dataset")
const dataset_sub_div=document.createElement("div")
dataset_sub_div.setAttribute("id",`dataset-${dataset_count}`)

const datset_p_tag=document.createElement("p")
datset_p_tag.innerHTML="datasets:"
dataset_sub_div.appendChild(datset_p_tag)

const input_tag_din=document.createElement("div")
input_tag_din.setAttribute("class","input_tag_div_style")

const source_div=document.createElement("div")
source_div.setAttribute("class","source_div")

const file_div=document.createElement("div")
file_div.setAttribute("class","file_div")

const add_row_dataset_div=document.createElement("div")
add_row_dataset_div.setAttribute("id",`row-${dataset_count}`)

const dest_div=document.createElement("div")
dest_div.setAttribute("id","last_component")
for(let i=0;i<3;i++){
    const input_tag_dins=document.createElement("div")
    input_tag_dins.setAttribute("class","input_tag_div_style")
    const input_tag=document.createElement("input")
    const dataset_lable_tag=document.createElement("label")
    dataset_lable_tag.setAttribute("class","dataset_att1")
    dataset_lable_tag.innerHTML=`${dataset_attr_1[i]}`
    input_tag.setAttribute("placeholder",dataset_attr_1[i])
    input_tag.setAttribute("class","dataset_att1")
    
    input_tag_dins.appendChild(dataset_lable_tag)
    input_tag_dins.appendChild(input_tag)
    input_tag_din.appendChild(input_tag_dins)
    dataset_sub_div.appendChild(input_tag_din)

}

    for(let j=0;j<dataset_attr_2.length;j++){
        if (dataset_attr_2[j]=="source_buckets"){
            const datset_p_tag=document.createElement("p")
            datset_p_tag.innerHTML="source_buckets : "
            datset_p_tag.setAttribute("class","datset_p_tag_style")
            source_div.appendChild(datset_p_tag)

            dataset_sub_div.appendChild(source_div)
            for(let k=0;k<dataset_attr_3.length;k++){
        const input_tags=document.createElement("input")
        const dataset_lable_tag=document.createElement("label")

        const variables=document.createElement("div")
        dataset_lable_tag.innerHTML=`${dataset_attr_3[k]} `
        input_tags.setAttribute("placeholder",dataset_attr_3[k])
        dataset_lable_tag.setAttribute("class","dataset_att2")
        input_tags.setAttribute("class","dataset_att2")


        variables.appendChild(dataset_lable_tag)
        variables.appendChild(input_tags)
        source_div.appendChild(variables)
        dataset_sub_div.appendChild(source_div)
    }
    const dataset_lable_tag=document.createElement("label")
    dataset_lable_tag.innerHTML="naming_pattern :"
    dataset_lable_tag.setAttribute("class","datset_p_tag_style")

    source_div.appendChild(dataset_lable_tag)
    const input_tags=document.createElement("input")
    input_tags.setAttribute("placeholder",dataset_attr_2[1])
    input_tags.setAttribute("class","dataset_att1")
    source_div.appendChild(input_tags)

    if(dataset_attr_2[j]="source_prefixes"){
        const source_divt=document.createElement("div")
        const dataset_lable_tag=document.createElement("label")
        dataset_lable_tag.innerHTML="source_prefixes : <br>"
        dataset_lable_tag.setAttribute("class","datset_p_tag_style")
        const input_tags=document.createElement("input")
        
        input_tags.setAttribute("placeholder","source_prefixes")
        input_tags.setAttribute("class","dataset_att3")

        source_divt.appendChild(dataset_lable_tag)
        source_divt.appendChild(input_tags)
        source_div.appendChild(source_divt)
        dataset_sub_div.appendChild(source_div)

    }
}

}

        const datset_p_tagrt=document.createElement("p")
        datset_p_tagrt.innerHTML="file_output_target"
        datset_p_tagrt.setAttribute("class","dataset_att1")
        file_div.appendChild(datset_p_tagrt)
        dataset_sub_div.appendChild(file_div)
        const dataset_lable_tagrt=document.createElement("label")
        dataset_lable_tagrt.innerHTML="target_buckets: <br>"
        dataset_lable_tagrt.setAttribute("class","datset_p_tag_style")
        file_div.appendChild(dataset_lable_tagrt)
        dataset_sub_div.appendChild(file_div)

                for(let k=0;k<dataset_attr_3.length;k++){
                    const dataset_lable_tagr=document.createElement("label")
                    const target_div=document.createElement("div")
                    dataset_lable_tagr.innerHTML=`${dataset_attr_3[k]}`
                    dataset_lable_tagr.setAttribute("class","dataset_att4")
                    const input_tagsr=document.createElement("input")
                    input_tagsr.setAttribute("placeholder",dataset_attr_3[k])
                    input_tagsr.setAttribute("class","dataset_att4")
                    target_div.appendChild(dataset_lable_tagr)
                    target_div.appendChild(input_tagsr)
                    file_div.appendChild(target_div)
                   dataset_sub_div.appendChild(file_div)
            }
            const target_div=document.createElement("div")   
const input_tagss=document.createElement("input")
const dataset_lable_tag=document.createElement("label")
dataset_lable_tag.innerHTML="target_prefix"
dataset_lable_tag.setAttribute("class","dataset_att6")
target_div.appendChild(dataset_lable_tag)
file_div.appendChild(target_div)
input_tagss.setAttribute("placeholder",dataset_attr_2[4])
input_tagss.setAttribute("class","dataset_att1")
target_div.appendChild(input_tagss)

const input_tags=document.createElement("input")
const dataset_lable_tags=document.createElement("label")
dataset_lable_tags.innerHTML="file_format"

dataset_lable_tags.setAttribute("class","dataset_att1")
target_div.appendChild(dataset_lable_tags)
input_tags.setAttribute("placeholder",dataset_attr_1[4])
target_div.appendChild(input_tags)
file_div.appendChild(target_div)
dataset_sub_div.appendChild(file_div)



const row_div=document.createElement("div")

const button_1=document.createElement("button")
button_1.setAttribute("onclick",`row_insert(${dataset_count})`)
button_1.innerHTML="clickhere"
row_div.appendChild(button_1)

add_row_dataset_div.appendChild(row_div)
dataset_sub_div.appendChild(add_row_dataset_div)


const files_have_header_row_lable=document.createElement("label")
const files_have_header_row_input=document.createElement("input")
files_have_header_row_lable.innerHTML="files_have_header_row"
files_have_header_row_input.setAttribute("placeholder","files_have_header_row")
dest_div.appendChild(files_have_header_row_lable)
dest_div.appendChild(files_have_header_row_input)
dataset_sub_div.appendChild(dest_div)



const dialect_p_tag=document.createElement("p")
dialect_p_tag.innerHTML="dialect :"
for(let t=5;t<7;t++){
    
const dialect=document.createElement("div")
dialect.setAttribute("id",`dialect-${t}`)
const dialect_input_tag=document.createElement("input")
const dialect_lable_tag=document.createElement("label")
dialect_input_tag.setAttribute("placeholder",`${dataset_attr_2[t]}`)
dialect_lable_tag.innerHTML=`${dataset_attr_2[t]}`

dialect.appendChild(dialect_lable_tag)
dialect.appendChild(dialect_input_tag)
dest_div.appendChild(dialect)
dataset_sub_div.appendChild(dest_div)
}

const datset_p_tag_dest=document.createElement("p")
datset_p_tag_dest.innerHTML="custom_datalake_bucket : "
datset_p_tag_dest.setAttribute("class","datset_p_tag_style")
dest_div.appendChild(datset_p_tag_dest)

dataset_sub_div.appendChild(dest_div)
for(let k=0;k<dataset_attr_3.length;k++){
const input_tags=document.createElement("input")
const dataset_lable_tag=document.createElement("label")

const variables=document.createElement("div")
dataset_lable_tag.innerHTML=`${dataset_attr_3[k]} `
input_tags.setAttribute("placeholder",dataset_attr_3[k])
dataset_lable_tag.setAttribute("class","dataset_att2")
input_tags.setAttribute("class","dataset_att2")


variables.appendChild(dataset_lable_tag)
variables.appendChild(input_tags)
dest_div.appendChild(variables)
dataset_sub_div.appendChild(dest_div)
}
const dest_tag=document.createElement("label")
dest_tag.innerHTML="datalake_root_directory :"
dest_tag.setAttribute("class","datset_p_tag_style")
dest_div.appendChild(dest_tag)

const datset_p_tag_dest2=document.createElement("p")
datset_p_tag_dest2.innerHTML="custom_vertica_batch_credentials : "
datset_p_tag_dest2.setAttribute("class","datset_p_tag_style")
dest_div.appendChild(datset_p_tag_dest2)

dataset_sub_div.appendChild(dest_div)
for(let k=0;k<dataset_attr_3.length;k++){
const input_tags=document.createElement("input")
const dataset_lable_tag=document.createElement("label")

const variables=document.createElement("div")
dataset_lable_tag.innerHTML=`${dataset_attr_3[k]} `
input_tags.setAttribute("placeholder",dataset_attr_3[k])
dataset_lable_tag.setAttribute("class","dataset_att2")
input_tags.setAttribute("class","dataset_att2")


variables.appendChild(dataset_lable_tag)
variables.appendChild(input_tags)
dest_div.appendChild(variables)
dataset_sub_div.appendChild(dest_div)
}
const dest_tag2=document.createElement("label")
dest_tag2.innerHTML="staging_schema :"
dest_tag2.setAttribute("class","datset_p_tag_style")
dest_div.appendChild(dest_tag2)
dataset_sub_div.appendChild(dest_div)


add_datset.appendChild(dataset_sub_div)
dataset_count++

}

function row_insert(dataset_counts) {
    let row_headings=["column_name","data_type","precision","scale","is_identity","is_nullable"]
    let row_heading_lenght=row_headings.length
        const dataset_sub_div_access=document.getElementById(`row-${dataset_counts}`)
        const add_row_div=document.createElement("div")
        add_row_div.setAttribute("id",`${add_row}`)
       
        for(let j=0;j<row_heading_lenght;j++){
        const label_tag=document.createElement("label")
        label_tag.innerHTML=`${row_headings[j]} : `
        
        add_row_div.appendChild(label_tag)
        const input_tag=document.createElement("input")
        input_tag.setAttribute("placeholder",`${row_headings[j]}`)
        add_row_div.appendChild(input_tag)
        dataset_sub_div_access.appendChild(add_row_div)
        }
    

add_row++    
}


