(function() {var implementors = {
"api":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;ConcreteDataType&gt; for <a class=\"struct\" href=\"api/helper/struct.ColumnDataTypeWrapper.html\" title=\"struct api::helper::ColumnDataTypeWrapper\">ColumnDataTypeWrapper</a>"]],
"catalog":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"catalog/system/enum.EntryType.html\" title=\"enum catalog::system::EntryType\">EntryType</a>"]],
"cmd":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"cmd/cli/cmd/enum.ReplCommand.html\" title=\"enum cmd::cli::cmd::ReplCommand\">ReplCommand</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"cmd/standalone/struct.StartCommand.html\" title=\"struct cmd::standalone::StartCommand\">StartCommand</a>&gt; for <a class=\"struct\" href=\"frontend/frontend/struct.FrontendOptions.html\" title=\"struct frontend::frontend::FrontendOptions\">FrontendOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"cmd/datanode/struct.StartCommand.html\" title=\"struct cmd::datanode::StartCommand\">StartCommand</a>&gt; for DatanodeOptions"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"cmd/metasrv/struct.StartCommand.html\" title=\"struct cmd::metasrv::StartCommand\">StartCommand</a>&gt; for MetaSrvOptions"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"cmd/frontend/struct.StartCommand.html\" title=\"struct cmd::frontend::StartCommand\">StartCommand</a>&gt; for <a class=\"struct\" href=\"frontend/frontend/struct.FrontendOptions.html\" title=\"struct frontend::frontend::FrontendOptions\">FrontendOptions</a>"]],
"common_error":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"common_error/status_code/enum.StatusCode.html\" title=\"enum common_error::status_code::StatusCode\">StatusCode</a>"]],
"common_query":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;ColumnarValue&gt; for <a class=\"enum\" href=\"common_query/columnar_value/enum.ColumnarValue.html\" title=\"enum common_query::columnar_value::ColumnarValue\">ColumnarValue</a>"]],
"datatypes":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;DFSchema&gt;&gt; for <a class=\"struct\" href=\"datatypes/schema/struct.Schema.html\" title=\"struct datatypes::schema::Schema\">Schema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"datatypes/schema/column_schema/struct.ColumnSchema.html\" title=\"struct datatypes::schema::column_schema::ColumnSchema\">ColumnSchema</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"datatypes/schema/struct.SchemaBuilder.html\" title=\"struct datatypes::schema::SchemaBuilder\">SchemaBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;DataType&gt; for <a class=\"enum\" href=\"datatypes/data_type/enum.ConcreteDataType.html\" title=\"enum datatypes::data_type::ConcreteDataType\">ConcreteDataType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Schema&gt; for <a class=\"struct\" href=\"datatypes/schema/struct.Schema.html\" title=\"struct datatypes::schema::Schema\">Schema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"struct\" href=\"datatypes/schema/column_schema/struct.ColumnSchema.html\" title=\"struct datatypes::schema::column_schema::ColumnSchema\">ColumnSchema</a>&gt; for Field"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;ScalarValue&gt; for <a class=\"enum\" href=\"datatypes/value/enum.Value.html\" title=\"enum datatypes::value::Value\">Value</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Schema&gt;&gt; for <a class=\"struct\" href=\"datatypes/schema/struct.Schema.html\" title=\"struct datatypes::schema::Schema\">Schema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;Field&gt; for <a class=\"struct\" href=\"datatypes/schema/column_schema/struct.ColumnSchema.html\" title=\"struct datatypes::schema::column_schema::ColumnSchema\">ColumnSchema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"datatypes/value/enum.Value.html\" title=\"enum datatypes::value::Value\">Value</a>&gt; for <a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.94/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"datatypes/schema/raw/struct.RawSchema.html\" title=\"struct datatypes::schema::raw::RawSchema\">RawSchema</a>&gt; for <a class=\"struct\" href=\"datatypes/schema/struct.Schema.html\" title=\"struct datatypes::schema::Schema\">Schema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"enum\" href=\"datatypes/schema/constraint/enum.ColumnDefaultConstraint.html\" title=\"enum datatypes::schema::constraint::ColumnDefaultConstraint\">ColumnDefaultConstraint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"datatypes/schema/constraint/enum.ColumnDefaultConstraint.html\" title=\"enum datatypes::schema::constraint::ColumnDefaultConstraint\">ColumnDefaultConstraint</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;"]],
"meta_client":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;BatchGetResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/store/struct.BatchGetResponse.html\" title=\"struct meta_client::rpc::store::BatchGetResponse\">BatchGetResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Table&gt; for <a class=\"struct\" href=\"meta_client/rpc/router/struct.Table.html\" title=\"struct meta_client::rpc::router::Table\">Table</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"meta_client/rpc/router/struct.CreateRequest.html\" title=\"struct meta_client::rpc::router::CreateRequest\">CreateRequest</a>&lt;'_&gt;&gt; for PbCreateRequest"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;PutResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/store/struct.PutResponse.html\" title=\"struct meta_client::rpc::store::PutResponse\">PutResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;BatchPutResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/store/struct.BatchPutResponse.html\" title=\"struct meta_client::rpc::store::BatchPutResponse\">BatchPutResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;DeleteRangeResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/store/struct.DeleteRangeResponse.html\" title=\"struct meta_client::rpc::store::DeleteRangeResponse\">DeleteRangeResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;RouteResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/router/struct.RouteResponse.html\" title=\"struct meta_client::rpc::router::RouteResponse\">RouteResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;RangeResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/store/struct.RangeResponse.html\" title=\"struct meta_client::rpc::store::RangeResponse\">RangeResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;MoveValueResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/store/struct.MoveValueResponse.html\" title=\"struct meta_client::rpc::store::MoveValueResponse\">MoveValueResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;CompareAndPutResponse&gt; for <a class=\"struct\" href=\"meta_client/rpc/store/struct.CompareAndPutResponse.html\" title=\"struct meta_client::rpc::store::CompareAndPutResponse\">CompareAndPutResponse</a>"]],
"meta_srv":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;HeartbeatRequest&gt; for <a class=\"struct\" href=\"meta_srv/handler/node_stat/struct.Stat.html\" title=\"struct meta_srv::handler::node_stat::Stat\">Stat</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;CompareAndPutRequest&gt; for <a class=\"struct\" href=\"meta_srv/service/store/etcd/struct.CompareAndPut.html\" title=\"struct meta_srv::service::store::etcd::CompareAndPut\">CompareAndPut</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"meta_srv/keys/struct.LeaseValue.html\" title=\"struct meta_srv::keys::LeaseValue\">LeaseValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"meta_srv/keys/struct.StatKey.html\" title=\"struct meta_srv::keys::StatKey\">StatKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;RangeRequest&gt; for <a class=\"struct\" href=\"meta_srv/service/store/etcd/struct.Get.html\" title=\"struct meta_srv::service::store::etcd::Get\">Get</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;DeleteRangeRequest&gt; for <a class=\"struct\" href=\"meta_srv/service/store/etcd/struct.Delete.html\" title=\"struct meta_srv::service::store::etcd::Delete\">Delete</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"meta_srv/keys/struct.StatValue.html\" title=\"struct meta_srv::keys::StatValue\">StatValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"meta_srv/keys/struct.LeaseKey.html\" title=\"struct meta_srv::keys::LeaseKey\">LeaseKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;PutRequest&gt; for <a class=\"struct\" href=\"meta_srv/service/store/etcd/struct.Put.html\" title=\"struct meta_srv::service::store::etcd::Put\">Put</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;MoveValueRequest&gt; for <a class=\"struct\" href=\"meta_srv/service/store/etcd/struct.MoveValue.html\" title=\"struct meta_srv::service::store::etcd::MoveValue\">MoveValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"meta_srv/keys/struct.StatValue.html\" title=\"struct meta_srv::keys::StatValue\">StatValue</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"meta_srv/keys/struct.LeaseValue.html\" title=\"struct meta_srv::keys::LeaseValue\">LeaseValue</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;BatchPutRequest&gt; for <a class=\"struct\" href=\"meta_srv/service/store/etcd/struct.BatchPut.html\" title=\"struct meta_srv::service::store::etcd::BatchPut\">BatchPut</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"meta_srv/keys/struct.LeaseKey.html\" title=\"struct meta_srv::keys::LeaseKey\">LeaseKey</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;BatchGetRequest&gt; for <a class=\"struct\" href=\"meta_srv/service/store/etcd/struct.BatchGet.html\" title=\"struct meta_srv::service::store::etcd::BatchGet\">BatchGet</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"meta_srv/selector/enum.SelectorType.html\" title=\"enum meta_srv::selector::SelectorType\">SelectorType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"meta_srv/service/admin/heartbeat/struct.StatValues.html\" title=\"struct meta_srv::service::admin::heartbeat::StatValues\">StatValues</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"]],
"partition":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Partition&gt; for <a class=\"struct\" href=\"partition/partition/struct.PartitionDef.html\" title=\"struct partition::partition::PartitionDef\">PartitionDef</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"partition/partition/struct.PartitionDef.html\" title=\"struct partition::partition::PartitionDef\">PartitionDef</a>&gt; for MetaPartition"]],
"servers":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"struct\" href=\"servers/influxdb/struct.InfluxdbRequest.html\" title=\"struct servers::influxdb::InfluxdbRequest\">InfluxdbRequest</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;GrpcInsertRequest&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"servers/tls/enum.TlsMode.html\" title=\"enum servers::tls::TlsMode\">TlsMode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;RecordBatch, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"servers/http/struct.HttpRecordsOutput.html\" title=\"struct servers::http::HttpRecordsOutput\">HttpRecordsOutput</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"servers/auth/user_provider/struct.StaticUserProvider.html\" title=\"struct servers::auth::user_provider::StaticUserProvider\">StaticUserProvider</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"servers/http/authorize/enum.AuthScheme.html\" title=\"enum servers::http::authorize::AuthScheme\">AuthScheme</a>"]],
"sql":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"sql/statements/query/struct.Query.html\" title=\"struct sql::statements::query::Query\">Query</a>&gt; for SpQuery"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Statement&gt; for <a class=\"struct\" href=\"sql/statements/explain/struct.Explain.html\" title=\"struct sql::statements::explain::Explain\">Explain</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Statement&gt; for <a class=\"struct\" href=\"sql/statements/delete/struct.Delete.html\" title=\"struct sql::statements::delete::Delete\">Delete</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"sql/statements/copy/enum.Format.html\" title=\"enum sql::statements::copy::Format\">Format</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Statement&gt; for <a class=\"struct\" href=\"sql/statements/insert/struct.Insert.html\" title=\"struct sql::statements::insert::Insert\">Insert</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"enum\" href=\"sql/statements/statement/enum.Statement.html\" title=\"enum sql::statements::statement::Statement\">Statement</a>&gt; for DfStatement"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Query&gt; for <a class=\"struct\" href=\"sql/statements/query/struct.Query.html\" title=\"struct sql::statements::query::Query\">Query</a>"]],
"storage":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Schema&gt;&gt; for <a class=\"struct\" href=\"storage/schema/store/struct.StoreSchema.html\" title=\"struct storage::schema::store::StoreSchema\">StoreSchema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;RegionDescriptor&gt; for <a class=\"struct\" href=\"storage/metadata/struct.RegionMetadataBuilder.html\" title=\"struct storage::metadata::RegionMetadataBuilder\">RegionMetadataBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;RegionDescriptor&gt; for <a class=\"struct\" href=\"storage/metadata/struct.RegionMetadata.html\" title=\"struct storage::metadata::RegionMetadata\">RegionMetadata</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Schema&gt; for <a class=\"struct\" href=\"storage/schema/store/struct.StoreSchema.html\" title=\"struct storage::schema::store::StoreSchema\">StoreSchema</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"storage/manifest/action/struct.RawRegionMetadata.html\" title=\"struct storage::manifest::action::RawRegionMetadata\">RawRegionMetadata</a>&gt; for <a class=\"struct\" href=\"storage/metadata/struct.RegionMetadata.html\" title=\"struct storage::metadata::RegionMetadata\">RegionMetadata</a>"]],
"table":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"table/metadata/struct.RawTableMeta.html\" title=\"struct table::metadata::RawTableMeta\">RawTableMeta</a>&gt; for <a class=\"struct\" href=\"table/metadata/struct.TableMeta.html\" title=\"struct table::metadata::TableMeta\">TableMeta</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"table/metadata/struct.RawTableInfo.html\" title=\"struct table::metadata::RawTableInfo\">RawTableInfo</a>&gt; for <a class=\"struct\" href=\"table/metadata/struct.TableInfo.html\" title=\"struct table::metadata::TableInfo\">TableInfo</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html\" title=\"struct std::collections::hash::map::RandomState\">RandomState</a>&gt;&gt; for <a class=\"struct\" href=\"table/requests/struct.TableOptions.html\" title=\"struct table::requests::TableOptions\">TableOptions</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()