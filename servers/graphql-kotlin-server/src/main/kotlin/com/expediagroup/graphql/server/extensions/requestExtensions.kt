/*
 * Copyright 2021 Expedia, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.expediagroup.graphql.server.extensions

import com.expediagroup.graphql.dataloader.KotlinDataLoaderRegistry
import com.expediagroup.graphql.server.types.GraphQLBatchRequest
import com.expediagroup.graphql.server.types.GraphQLRequest
import graphql.ExecutionInput

/**
 * Convert the common [GraphQLRequest] to the [ExecutionInput] used by graphql-java
 */
fun GraphQLRequest.toExecutionInput(
    dataLoaderRegistry: KotlinDataLoaderRegistry? = null,
    graphQLContext: Any? = null,
    graphQLContextMap: Map<*, Any>? = null
): ExecutionInput =
    ExecutionInput.newExecutionInput()
        .query(this.query)
        .operationName(this.operationName)
        .variables(this.variables ?: emptyMap())
        .dataLoaderRegistry(dataLoaderRegistry ?: KotlinDataLoaderRegistry())
        .also { builder ->
            graphQLContext?.let { builder.context(it) }
            graphQLContextMap?.let { builder.graphQLContext(it) }
        }
        .build()

/**
 * Without doing a parsing attempt checks if the [GraphQLRequest] is a mutation
 */
fun GraphQLRequest.isMutation(): Boolean = query.contains("mutation ")

/**
 * Without doing a parsing attempt checks if the [GraphQLBatchRequest] contains a mutation
 */
fun GraphQLBatchRequest.containsMutation(): Boolean = requests.any(GraphQLRequest::isMutation)
