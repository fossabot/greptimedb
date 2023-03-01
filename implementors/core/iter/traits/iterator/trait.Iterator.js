(function() {var implementors = {
"common_recordbatch":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"common_recordbatch/recordbatch/struct.RecordBatchRowIterator.html\" title=\"struct common_recordbatch::recordbatch::RecordBatchRowIterator\">RecordBatchRowIterator</a>&lt;'a&gt;"]],
"datatypes":[["impl&lt;'a, T: <a class=\"trait\" href=\"datatypes/prelude/trait.LogicalPrimitiveType.html\" title=\"trait datatypes::prelude::LogicalPrimitiveType\">LogicalPrimitiveType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"datatypes/vectors/primitive/struct.PrimitiveIter.html\" title=\"struct datatypes::vectors::primitive::PrimitiveIter\">PrimitiveIter</a>&lt;'a, T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"datatypes/vectors/list/struct.ListIter.html\" title=\"struct datatypes::vectors::list::ListIter\">ListIter</a>&lt;'a&gt;"]],
"sqlness_runner":[["impl&lt;N, B, D, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sqlness_runner/util/struct.NullableColumnIter.html\" title=\"struct sqlness_runner::util::NullableColumnIter\">NullableColumnIter</a>&lt;N, B, D, T&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = B&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,</span>"]],
"storage":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"storage/memtable/btree/struct.IterRow.html\" title=\"struct storage::memtable::btree::IterRow\">IterRow</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"storage/memtable/btree/struct.MapIterWrapper.html\" title=\"struct storage::memtable::btree::MapIterWrapper\">MapIterWrapper</a>&lt;'a, <a class=\"struct\" href=\"storage/memtable/btree/struct.InnerKey.html\" title=\"struct storage::memtable::btree::InnerKey\">InnerKey</a>, <a class=\"struct\" href=\"storage/memtable/btree/struct.RowValue.html\" title=\"struct storage::memtable::btree::RowValue\">RowValue</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"storage/memtable/btree/struct.BTreeIterator.html\" title=\"struct storage::memtable::btree::BTreeIterator\">BTreeIterator</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()