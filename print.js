---
config_metadata:
  item_name: fast_ac_doc_typ_tier1
  app_name: ffi2
source:
  name: fast_ac_doc_typ_tier1
project:
  name:  fast_ac_doc_typ_tier1
  notes: fast project - all_files_extract
  point_of_contact: dmefastde@massmutual.com
datasets:
  - name: edw_ac_doc_typ_attr
    load_type: incremental
    file_input_source:
      source_buckets:
        dev: edap-etl-fast-dataplatform-dev
        qa: edap-etl-fast-dataplatform-qa
        prod: edap-etl-fast-dataplatform-prod
      naming_pattern: 0ac_doc_typ_attr_??????????????.csv
      source_prefixes:
        - fast_tier1_inbound/fast_ac_doc_typ_tier1
    file_output_target:
      target_buckets:
        dev: edap-etl-fast-dataplatform-dev
        qa:  edap-etl-fast-dataplatform-qa
        prod: edap-etl-fast-dataplatform-prod
      target_prefix: engineering/fast_tier1
    file_format: delimited
    ddl:
      - {column_name: blart_aka_document_type, data_type: varchar, precision: 2, scale: null, is_identity: false, is_nullable: true}
      - {column_name: numkr_aka_number_range, data_type: varchar, precision: 2, scale: null, is_identity: false, is_nullable: true}
      - {column_name: stbla_aka_reverse_document_type, data_type: varchar, precision: 2, scale: null, is_identity: false, is_nullable: true}
    files_have_header_row: true
    dialect:
      delimiter: '|'
      quote_char: '"'
    file_transformer_config:
      file_transformations:
        - name: encoder
          kwargs:
            source_encoding: UTF-8 
    destination:
      custom_datalake_bucket:
        dev: edap-etl-fast-datalake-dev
        qa:  edap-etl-fast-datalake-qa
        prod: edap-etl-fast-datalake-prod
      datalake_root_directory: datalake
      custom_vertica_batch_credentials:
        dev: dev/edap-etl/fast/vertica-batch
        qa: qa/edap-etl/fast/vertica-batch
        prod: prod/edap-etl/fast/vertica-batch
      staging_schema: ext_edap_fast_staging
      schema: fast_ac_doc_typ_tier1
      table: edw_ac_doc_typ_attr
  - name: edw_ac_doc_typ_text
    load_type: incremental
    file_input_source:
      source_buckets:
        dev: edap-etl-fast-dataplatform-dev
        qa: edap-etl-fast-dataplatform-qa
        prod: edap-etl-fast-dataplatform-prod
      naming_pattern: 0ac_doc_typ_text_??????????????.csv
      source_prefixes:
        - fast_tier1_inbound/fast_ac_doc_typ_tier1
    file_output_target:
      target_buckets:
        dev: edap-etl-fast-dataplatform-dev
        qa:  edap-etl-fast-dataplatform-qa
        prod: edap-etl-fast-dataplatform-prod
      target_prefix: engineering/fast_tier1
    file_format: delimited
    ddl:
      - {column_name: spras_aka_language_key, data_type: varchar, precision: 2, scale: null, is_identity: false, is_nullable: true}
      - {column_name: blart_aka_document_type, data_type: varchar, precision: 2, scale: null, is_identity: false, is_nullable: true}
      - {column_name: ltext_aka_document_type_description, data_type: varchar, precision: 25, scale: null, is_identity: false, is_nullable: true}
    files_have_header_row: true
    dialect:
      delimiter: '|'
      quote_char: '"'
    file_transformer_config:
      file_transformations:
        - name: encoder
          kwargs:
            source_encoding: UTF-8 
    destination:
      custom_datalake_bucket:
        dev: edap-etl-fast-datalake-dev
        qa:  edap-etl-fast-datalake-qa
        prod: edap-etl-fast-datalake-prod
      datalake_root_directory: datalake
      custom_vertica_batch_credentials:
        dev: dev/edap-etl/fast/vertica-batch
        qa: qa/edap-etl/fast/vertica-batch
        prod: prod/edap-etl/fast/vertica-batch
      staging_schema: ext_edap_fast_staging
      schema: fast_ac_doc_typ_tier1
      table: edw_ac_doc_typ_text
