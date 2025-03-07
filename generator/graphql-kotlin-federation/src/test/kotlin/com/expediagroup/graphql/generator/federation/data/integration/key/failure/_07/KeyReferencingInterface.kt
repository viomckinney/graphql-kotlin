/*
 * Copyright 2022 Expedia, Inc
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

package com.expediagroup.graphql.generator.federation.data.integration.key.failure._07

import com.expediagroup.graphql.generator.federation.directives.FieldSet
import com.expediagroup.graphql.generator.federation.directives.KeyDirective
import io.mockk.mockk

/*
# example usage of invalid @key directive - field set references interface
type KeyReferencingInterface @key(fields : "id") {
  description: String!
  id: KeyInterface!
}

interface KeyInterface {
  id: String!
}
 */
@KeyDirective(fields = FieldSet("id"))
data class KeyReferencingInterface(val id: KeyInterface, val description: String)

interface KeyInterface {
    val id: String
}

class KeyReferencingInterfaceQuery {
    fun keyQuery(): KeyReferencingInterface = mockk()
}
