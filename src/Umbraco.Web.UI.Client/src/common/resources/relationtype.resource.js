/**
 * @ngdoc service
 * @name umbraco.resources.relationTypeResource
 * @description Loads in data for relation types.
 */
function relationTypeResource($q, $http, umbRequestHelper, umbDataFormatter) {
    return {

        /**
         * @ngdoc method
         * @name umbraco.resources.relationTypeResource#getById
         * @methodOf umbraco.resources.relationTypeResource
         *
         * @description
         * Gets a relation type with a given ID.
         *
         * ##usage
         * <pre>
         * relationTypeResource.getById(1234)
         *    .then(function() {
         *        alert('Found it!');
         *    });
         * </pre>
         *
         * @param {Int} id of the relation type to get.
         * @returns {Promise} resourcePromise containing relation type data.
         */
        getById: function (id) {
            return umbRequestHelper.resourcePromise(
                $http.get(
                    umbRequestHelper.getApiUrl(
                        "relationTypeApiBaseUrl",
                        "GetById",
                        [{ id: id }]
                    )
                ),
                "Failed to get item " + id
            );
        },

        /**
         * @ngdoc method
         * @name umbraco.resources.relationTypeResource#save
         * @methodof umbraco.resources.relationTypeResource
         *
         * @description
         * Updates a relation type.
         *
         * @param {Object} relationType The relation type object to update.
         * @returns {Promise} A resourcePromise object.
         */
        save: function (relationType) {
            var saveModel = umbDataFormatter.formatRelationTypePostData(relationType);

            return umbRequestHelper.resourcePromise(
                $http.post(umbRequestHelper.getApiUrl("relationTypeApiBaseUrl", "PostSave"), saveModel),
                "Failed to save data for relation type ID" + relationType.id
            );
        },

        deleteById: function (id) {

        }

    };
}

angular.module("umbraco.resources").factory("relationTypeResource", relationTypeResource);
