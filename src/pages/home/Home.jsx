import { useEffect, useState } from "react";
import { getMoviesApi } from "../../api/movie.api";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    useEffect(() => {
        getMoviesApi()
            .then((result) => {
                console.log("result: ", result);
            })
            .catch((err) => console.log("error: ", err));
    }, []);

    return (
        <div className="home">
            <Banner />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum natus incidunt repudiandae quam, nam aliquid, amet
                beatae debitis esse accusamus rem accusantium, qui culpa libero
                quaerat optio fugit laudantium unde enim placeat neque ipsum
                perspiciatis asperiores? Facilis hic obcaecati consectetur quas
                nobis repellat, tempora, modi aliquid eos commodi ad nulla
                similique sint. Optio, illo quis. Quibusdam assumenda quam
                sapiente sequi eos, mollitia eum, dolorum impedit, reprehenderit
                facilis dolor. Quaerat eos laboriosam ab magnam repellendus amet
                minus animi doloribus reiciendis deserunt dolor corporis rem
                tempora expedita non saepe molestiae alias id provident aliquam,
                consequuntur veritatis numquam. Optio repellendus, assumenda
                minus tempore voluptates maxime provident ipsum aliquam.
                Temporibus delectus voluptatum explicabo, distinctio nostrum
                totam maiores quis beatae? Accusantium dignissimos perspiciatis
                dolorum nam vero quis harum odio in laudantium veniam! Facere
                perspiciatis veritatis maxime cupiditate aliquid tempora aliquam
                repellendus nam itaque, obcaecati libero natus voluptatem enim
                dolore mollitia molestiae aut ipsa beatae. Nihil consequatur
                vero alias vel at accusantium ratione quibusdam, voluptates
                aperiam consectetur, exercitationem veritatis harum est eligendi
                doloribus dicta earum blanditiis porro suscipit excepturi nisi
                architecto, laborum facere unde! Deserunt debitis accusantium
                eveniet! Voluptatem ipsa atque quae unde nemo, maiores provident
                aperiam animi sequi vitae quasi consequatur obcaecati iste?
                Corporis maiores error tempora amet repudiandae repellendus,
                quod cumque, laboriosam quibusdam nulla dicta cupiditate
                incidunt reiciendis cum placeat officia consectetur dolorum
                corrupti facilis omnis fuga voluptate quo! Voluptas eos numquam
                optio dolorum aspernatur! Accusamus aliquid totam quia rem nulla
                similique exercitationem iusto explicabo, fugiat maxime magni
                rerum nisi quaerat iste! Ab saepe quisquam ad praesentium at
                voluptate, quidem molestiae esse enim? Inventore quibusdam
                quidem officiis soluta libero ullam fugiat quos! Sapiente
                voluptatibus optio esse at, corrupti vel quaerat ab inventore
                quisquam illo sed ducimus pariatur aut corporis nihil eius
                praesentium nam expedita eos facilis, doloribus alias? Quidem,
                expedita exercitationem. Labore eum commodi delectus libero enim
                at ipsam, voluptatibus, sunt dolorem sapiente sed aspernatur
                magnam recusandae voluptatum earum blanditiis quibusdam maxime
                autem hic cumque minima soluta deleniti? Nisi explicabo
                reprehenderit eligendi sunt quia, unde cum exercitationem ullam
                quaerat inventore perferendis tempore reiciendis necessitatibus
                repudiandae ratione obcaecati dolorem rem delectus molestias
                earum corrupti velit? Dolorum, nihil. Fugit nam in incidunt
                quasi repellat ab. Adipisci optio exercitationem, placeat earum
                sapiente molestias accusantium rerum, voluptatem magni dolorem
                ducimus! Modi, dolore non. Sit excepturi molestiae unde? Autem
                debitis nisi neque? Nesciunt soluta eos delectus nostrum sit
                minus voluptate, assumenda quos voluptas a obcaecati porro
                expedita autem beatae vitae sint exercitationem! Nulla sint
                maxime culpa, ipsam tempore recusandae qui et amet dignissimos
                mollitia enim harum inventore nostrum sequi perspiciatis
                cupiditate accusamus voluptatum esse. Ducimus dolores impedit
                consequatur, ex iste praesentium, sunt dignissimos non laborum
                pariatur quod corrupti illum, consectetur architecto mollitia
                inventore temporibus magnam! Earum, possimus excepturi. Nostrum
                ducimus aut earum numquam consequuntur itaque deleniti corporis
                consectetur magni. Recusandae laborum aliquid dolorem
                repudiandae doloribus placeat possimus fuga quod eligendi
                asperiores dolor illum ipsam autem minima labore, expedita hic
                rerum. Autem eius asperiores modi, amet neque iusto veniam
                architecto nemo nesciunt excepturi dignissimos dolorem officia!
                Porro asperiores, molestiae obcaecati doloremque sit minima odio
                ad quisquam corrupti beatae debitis voluptatem? Quasi, quaerat
                ratione, velit iusto assumenda dignissimos molestiae odit vel
                eligendi neque, quod deleniti quos deserunt tempora sed non.
                Corporis cum hic dolores, iste natus odio velit molestias quis
                modi maxime minus fuga a illo eum. Suscipit sint quisquam velit
                possimus quis adipisci atque blanditiis? Repudiandae quibusdam
                reiciendis laudantium eligendi illo harum, ipsam numquam, aut
                facilis eveniet exercitationem quam ducimus impedit ipsa
                tenetur. Vitae quos qui, adipisci libero laboriosam aliquid amet
                quidem labore vero veniam iusto, optio ratione! Ratione corporis
                voluptates nisi ex. Corporis repudiandae cumque velit sunt,
                temporibus mollitia id pariatur illum dignissimos error. Id
                magni inventore dolorem autem, ab consequatur doloribus. Cum
                accusamus corrupti repellendus sit nostrum voluptatum obcaecati
                mollitia exercitationem consequuntur quo, laboriosam sunt
                debitis pariatur, quas libero culpa saepe non ipsa dolor?
                Corrupti adipisci eaque odit. Rerum hic quis itaque aliquam
                illum officia reprehenderit sint, aspernatur laudantium iste,
                fuga minus atque recusandae! Maxime deleniti aperiam earum
                architecto vero ipsam consequuntur facilis eligendi eveniet
                fugiat, animi alias doloribus perferendis provident. Ipsam
                voluptatem perspiciatis, pariatur asperiores temporibus culpa
                voluptas neque dolorem deleniti doloribus nam aut suscipit quia
                officiis optio fugiat, fugit, odit tempore perferendis illo.
                Quis dicta ducimus esse unde eveniet quia vero tenetur ad,
                numquam error repudiandae soluta aliquam, eligendi sint libero,
                officia expedita excepturi harum deleniti quasi tempore velit
                repellat? Eius eos perferendis inventore aspernatur ex, neque,
                sed mollitia fuga obcaecati nesciunt reiciendis porro et itaque?
                Deserunt, facere? Libero quod accusamus a nesciunt placeat
                fugiat aliquam aut minus rem deserunt consequatur deleniti
                voluptatum laboriosam, temporibus ea. Consequatur a minima alias
                deleniti? Suscipit, sed commodi maiores quaerat nobis fuga?
                Veritatis saepe molestias eius iusto, ducimus labore! Voluptatum
                delectus molestiae, blanditiis rem odio voluptatem illo
                asperiores numquam totam consequatur commodi, facilis assumenda
                ullam dolorem repellendus eos exercitationem quo dignissimos
                repellat dolores enim sint magnam velit. Eligendi, voluptatum
                illo dignissimos, quam ex non dolor natus omnis in nulla minus
                sapiente, quisquam dicta. Perferendis explicabo doloremque
                tempora illum voluptatem ut amet culpa temporibus, cupiditate
                itaque, a omnis aspernatur iste sit laborum repellendus velit
                dolore repudiandae ducimus, sunt voluptatibus quis. Excepturi
                voluptas laborum eos harum fugiat impedit nisi vitae quod culpa
                facere mollitia, repudiandae distinctio, consectetur beatae?
                Asperiores quisquam praesentium rem dicta sint, voluptatum animi
                inventore facilis molestiae culpa perspiciatis eius quidem
                assumenda? Vitae illum provident rerum, tempora explicabo eos a,
                similique maiores quam, maxime pariatur odit ea iste cum
                doloribus impedit nostrum culpa? Veritatis laboriosam, facere
                corrupti corporis voluptas odio quam aspernatur harum qui
                quibusdam quo libero magnam, soluta ut nam ipsa voluptatem
                adipisci! Nostrum quibusdam ad distinctio placeat voluptas sint
                corporis, architecto alias, mollitia aperiam omnis atque
                voluptates quas fugiat provident eius, cupiditate harum odit
                quos? Laborum nemo, quibusdam dolor iusto ullam inventore
                corrupti minima placeat natus adipisci eius molestias rem
                dignissimos eveniet perspiciatis voluptatum modi nobis
                exercitationem doloribus. Magni, hic quaerat! Consequatur eos
                cumque maiores quidem assumenda? Atque, voluptatem excepturi ea
                incidunt dignissimos impedit blanditiis tempore quibusdam quos
                voluptas quas nobis odit ducimus dolorem harum illum ab totam!
            </p>
        </div>
    );
};

export default Home;
