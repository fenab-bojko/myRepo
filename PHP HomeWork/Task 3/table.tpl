
<style>
    * {
        box-sizing: border-box;
    }
    body {
        margin: 30px;
    }
    div {
        border: 1px solid gray;
        border-radius: 16px;
        display: inline-flex;
        padding: 15px;
    }
    th {
        padding: 5px;
        width: 100px;
        text-align: center;
    }
    tbody tr {
        text-align: center;
    }
    tbody th {
        width: 200px;
    }
</style>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($mass as $value): ?>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <?= $value['Product name']; ?>
                </th>
                <td class="px-6 py-4">
                    <?= $value['Color']; ?>
                </td>
                <td class="px-6 py-4">
                    <?= $value['Category']; ?>
                </td>
                <td class="px-6 py-4">
                    <?= $value['Price']; ?>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><?= $value['Action']?></a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>