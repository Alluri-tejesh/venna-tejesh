
let dataset_count=0
let add_row=0

let dataset_attr_3=["item_name","app_name","name1","name","notes","point_of_contact"]

let dataset_attr_0=["config_metadata","source","project"]
const const_data=document.getElementById("const_data")
const dataset_sub_div=document.createElement("div")
const meta_p_y_tag=document.createElement("p")
meta_p_y_tag.innerHTML=`${dataset_attr_0[0]}`
dataset_sub_div.appendChild(meta_p_y_tag)
for(let q=0;q<2;q++){
    const meta_div=document.createElement("div")
    meta_div.setAttribute("class","congi_declare")
    const meta_label=document.createElement("label")
    const meta_input=document.createElement("input")
    meta_input.setAttribute("id",`${dataset_attr_3[q]}`)
    meta_input.setAttribute("placeholder",`${dataset_attr_3[q]}`)
    meta_label.innerHTML=`${dataset_attr_3[q]}`
    meta_div.appendChild(meta_label)
    meta_div.appendChild(meta_input)
    dataset_sub_div.appendChild(meta_div)
    const_data.appendChild(dataset_sub_div)
}


const meta_p_y_tag_1=document.createElement("p")
meta_p_y_tag_1.innerHTML=`${dataset_attr_0[1]}`
dataset_sub_div.appendChild(meta_p_y_tag_1)
const meta_div_1=document.createElement("div")
meta_div_1.setAttribute("class","congi_declare")
const meta_label=document.createElement("label")
const meta_input=document.createElement("input")
meta_input.setAttribute("id",`${dataset_attr_3[2]}`)
meta_input.setAttribute("placeholder",`${dataset_attr_3[2]}`)
meta_label.innerHTML=`${dataset_attr_3[2]}`
meta_div_1.appendChild(meta_label)
meta_div_1.appendChild(meta_input)
dataset_sub_div.appendChild(meta_div_1)
const_data.appendChild(dataset_sub_div)


const meta_p_y_tag_3ty=document.createElement("p")
meta_p_y_tag_3ty.innerHTML=`${dataset_attr_0[0]}`
dataset_sub_div.appendChild(meta_p_y_tag_3ty)
for(let q=3;q<6;q++){
    const meta_div_3ty=document.createElement("div")
    meta_div_3ty.setAttribute("class","congi_declare")
    const meta_label=document.createElement("label")
    const meta_input=document.createElement("input")
    meta_input.setAttribute("id",`${dataset_attr_3[q]}`)
    meta_input.setAttribute("placeholder",`${dataset_attr_3[q]}`)
    meta_label.innerHTML=`${dataset_attr_3[q]}`
    meta_div_3ty.appendChild(meta_label)
    meta_div_3ty.appendChild(meta_input)
    dataset_sub_div.appendChild(meta_div_3ty)
    const_data.appendChild(dataset_sub_div)
}




function datset_add() {

    row_add=0
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
    input_tag.setAttribute("id",`${dataset_attr_1[i]}-${dataset_count}`)
    const dataset_lable_tag=document.createElement("label")
    dataset_lable_tag.setAttribute("class","dataset_att1")
    dataset_lable_tag.innerHTML=`${dataset_attr_1[i]}`
    input_tag.setAttribute("placeholder",`${dataset_attr_1[i]}`)
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
        input_tags.setAttribute("id",`${dataset_attr_3[k]}-${dataset_count}`)
        const variables=document.createElement("div")
        dataset_lable_tag.innerHTML=`${dataset_attr_3[k]} `
        input_tags.setAttribute("placeholder",`${dataset_attr_3[k]}`)
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
    input_tags.setAttribute("id",`${dataset_attr_2[1]}-${dataset_count}`)
    input_tags.setAttribute("placeholder",`${dataset_attr_2[1]}`)
    input_tags.setAttribute("class","dataset_att1")
    source_div.appendChild(input_tags)

    if(dataset_attr_2[j]="source_prefixes"){
        const source_divt=document.createElement("div")
        const dataset_lable_tag=document.createElement("label")
        dataset_lable_tag.innerHTML="source_prefixes : <br>"
        dataset_lable_tag.setAttribute("class","datset_p_tag_style")
        const input_tags=document.createElement("input")
        input_tags.setAttribute("id",`source_prefixes-${dataset_count}`)
        
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
                    input_tagsr.setAttribute("id",`${dataset_attr_3[k]}-${dataset_count}`)
                    input_tagsr.setAttribute("placeholder",dataset_attr_3[k])
                    input_tagsr.setAttribute("class","dataset_att4")
                    target_div.appendChild(dataset_lable_tagr)
                    target_div.appendChild(input_tagsr)
                    file_div.appendChild(target_div)
                   dataset_sub_div.appendChild(file_div)
            }
const target_div=document.createElement("div")   
const input_tagss=document.createElement("input")
input_tagss.setAttribute("id",`${dataset_attr_2[4]}-${dataset_count}`)
const dataset_lable_tag=document.createElement("label")
dataset_lable_tag.innerHTML="target_prefix"
dataset_lable_tag.setAttribute("class","dataset_att6")
target_div.appendChild(dataset_lable_tag)
file_div.appendChild(target_div)
input_tagss.setAttribute("placeholder",dataset_attr_2[4])
input_tagss.setAttribute("class","dataset_att1")
target_div.appendChild(input_tagss)

const input_tags=document.createElement("input")
input_tags.setAttribute("id",`${dataset_attr_1[4]}-${dataset_count}`)
const dataset_lable_tags=document.createElement("label")
dataset_lable_tags.innerHTML="file_format"

dataset_lable_tags.setAttribute("class","dataset_att1")
target_div.appendChild(dataset_lable_tags)
input_tags.setAttribute("placeholder",dataset_attr_1[4])
target_div.appendChild(input_tags)
dataset_sub_div.appendChild(file_div)

const dataset_lable_tags_file=document.createElement("label")
dataset_lable_tags_file.innerHTML="<br> -ddl"
dataset_lable_tags_file.setAttribute("class","dataset_att1")
target_div.appendChild(dataset_lable_tags_file)



const row_div=document.createElement("div")
const button_1=document.createElement("button")
button_1.setAttribute("onclick",`row_insert(${dataset_count})`)
button_1.innerHTML="clickhere"
row_div.appendChild(button_1)

add_row_dataset_div.appendChild(row_div)
dataset_sub_div.appendChild(add_row_dataset_div)


const files_have_header_row_lable=document.createElement("label")
const files_have_header_row_input=document.createElement("input")
files_have_header_row_input.setAttribute("id",`files_have_header_row-${dataset_count}`)
files_have_header_row_lable.innerHTML="files_have_header_row"
files_have_header_row_input.setAttribute("placeholder","files_have_header_row")
files_have_header_row_lable.setAttribute("class","dataset_att1")
files_have_header_row_input.setAttribute("class","dataset_att1")
dest_div.appendChild(files_have_header_row_lable)
dest_div.appendChild(files_have_header_row_input)
dataset_sub_div.appendChild(dest_div)



const dialect_p_tag=document.createElement("p")
dialect_p_tag.innerHTML="dialect :"
dialect_p_tag.setAttribute("class","dataset_att1")
dest_div.appendChild(dialect_p_tag)

for(let t=5;t<7;t++){
    
const dialect=document.createElement("div")
dialect.setAttribute("id",`dialect-${t}`)
const dialect_input_tag=document.createElement("input")
dialect_input_tag.setAttribute("id",`${dataset_attr_2[t]}-${dataset_count}`)
const dialect_lable_tag=document.createElement("label")
dialect_input_tag.setAttribute("placeholder",`${dataset_attr_2[t]}`)
dialect_lable_tag.innerHTML=`${dataset_attr_2[t]}`
dialect_lable_tag.setAttribute("class","datset_p_tag_style")
dialect_input_tag.setAttribute("class","dataset_att1")

dialect.appendChild(dialect_lable_tag)
dialect.appendChild(dialect_input_tag)
dest_div.appendChild(dialect)
dataset_sub_div.appendChild(dest_div)
}
const dialect_p_tag_sest=document.createElement("p")
dialect_p_tag_sest.innerHTML="destination:"
dialect_p_tag_sest.setAttribute("class","dataset_att1")
dest_div.appendChild(dialect_p_tag_sest)

const datset_p_tag_dest=document.createElement("p")
datset_p_tag_dest.innerHTML="custom_datalake_bucket : "
datset_p_tag_dest.setAttribute("class","datset_p_tag_style")
dest_div.appendChild(datset_p_tag_dest)

dataset_sub_div.appendChild(dest_div)
for(let k=0;k<dataset_attr_3.length;k++){
const input_tags=document.createElement("input")
input_tags.setAttribute("id",`${dataset_attr_3[k]}-${dataset_count}`)
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
const dest_lake_input=document.createElement("input")
dest_lake_input.setAttribute("id",`datalake_root_directory-${dataset_count}`)
dest_lake_input.setAttribute("placeholder","datalake_root_directory")
dest_lake_input.setAttribute("class","dataset_att2")
dest_tag.innerHTML="datalake_root_directory :"
dest_tag.setAttribute("class","datset_p_tag_style")
dest_div.appendChild(dest_tag)
dest_div.appendChild(dest_lake_input)

const datset_p_tag_dest2=document.createElement("p")
datset_p_tag_dest2.innerHTML="custom_vertica_batch_credentials : "
datset_p_tag_dest2.setAttribute("class","datset_p_tag_style")
dest_div.appendChild(datset_p_tag_dest2)

dataset_sub_div.appendChild(dest_div)
for(let k=0;k<dataset_attr_3.length;k++){
const input_tags=document.createElement("input")
u=input_tags.setAttribute("id",`${dataset_attr_3[k]}-${dataset_count}`)
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
for (let y=10;y<13;y++){
const div_mn=document.createElement("div")

const dest_tag2=document.createElement("label")
dest_tag2.innerHTML=`${dataset_attr_2[y]}`
dest_tag2.setAttribute("class","datset_p_tag_style")
const schema_input=document.createElement("input")
schema_input.setAttribute("id",`${dataset_attr_2[y]}-${dataset_count}`)
schema_input.setAttribute("placeholder",`${dataset_attr_2[y]}`)
dest_tag2.setAttribute("class","datset_p_tag_style")
schema_input.setAttribute("class","dataset_att1")

div_mn.appendChild(dest_tag2)
div_mn.appendChild(schema_input)
dest_div.appendChild(div_mn)

}
dataset_sub_div.appendChild(dest_div)


add_datset.appendChild(dataset_sub_div)
dataset_count++

}

function row_insert(dataset_counts) {
    let row_headings=["column_name","data_type","precision","scale","is_identity","is_nullable"]
    let row_heading_lenght=row_headings.length
        const dataset_sub_div_access=document.getElementById(`row-${dataset_counts}`)
        const add_row_div=document.createElement("div")
        add_row_div.setAttribute("id","helo")
       
        for(let j=0;j<row_heading_lenght;j++){
        const label_tag=document.createElement("label")
        label_tag.innerHTML=`${row_headings[j]} : `
        
        add_row_div.appendChild(label_tag)
        const input_tag=document.createElement("input")
        input_tag.setAttribute("id",`rows-${dataset_counts}-${row_headings[j]}-${row_add}`)
        input_tag.setAttribute("placeholder",`${row_headings[j]}`)
        add_row_div.appendChild(input_tag)
        dataset_sub_div_access.appendChild(add_row_div)
        }
    
        row_add++  
add_row++    
}


    function printData(){
        const ot=document.getElementById("output")
        console.log(`${dataset_count}`)

ot.innerHTML +=`<pre>
config_metadata:
  item_name: ${document.getElementById(`item_name`).value}
  app_name:  ${document.getElementById(`app_name`).value}
source:
  name: ${document.getElementById(`name1`).value}
project:
  name:  ${document.getElementById(`name`).value}
  notes: ${document.getElementById(`notes`).value}
  point_of_contact: ${document.getElementById(`point_of_contact`).value}</pre>`
for(let i=0;i<dataset_count;i++){
    const row_count_div=document.getElementById(`row-${i}`)
    const counter_roue=row_count_div.children.length
    console.log(`${counter_roue}-1`)
ot.innerHTML +=`<pre>
datasets:
  - name: ${document.getElementById(`- name:-${i}`).value}
    load_type: ${document.getElementById(`load_type:-${i}`).value}
    file_input_source:
      source_buckets:
        dev: ${document.getElementById(`dev-${i}`).value}
        qa: ${document.getElementById(`qa-${i}`).value}
        prod: ${document.getElementById(`prod-${i}`).value}
      naming_pattern: ${document.getElementById(`naming_pattern-${i}`).value}
      source_prefixes:
        - ${document.getElementById(`source_prefixes-${i}`).value}
    file_output_target:
      target_buckets:
        dev: ${document.getElementById(`dev-${i}`).value}
        qa:  ${document.getElementById(`qa-${i}`).value}
        prod:${document.getElementById(`prod-${i}`).value}
      target_prefix: ${document.getElementById(`target_prefix-${i}`).value}
    file_format: ${document.getElementById(`file_format:-${i}`).value}
    ddl:
 </pre>`
for(let j=0;j<counter_roue-1;j++){
ot.innerHTML +=`<pre>- {column_name: ${document.getElementById(`rows-${i}-column_name-${j}`).value}, data_type: ${document.getElementById(`rows-${i}-data_type-${j}`).value} </pre>`

            }
        }


        var a = document.createElement("a");
        a.innerHTML="hello"
        var file = new Blob([ot], {type: 'text/yaml'});
        a.href = URL.createObjectURL(file);
        a.download = "dataset1.yml";
        a.click();
        ot.appendChild(a)

    }

        
