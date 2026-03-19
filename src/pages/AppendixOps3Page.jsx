import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Page() {
  return (
    <article className="doc-content">
      <h1>OPS 3 — 조직 문화가 비즈니스 성과를 어떻게 지원합니까?</h1>

      <p>
        고성과 운영 문화는 지속적인 학습, 실험, 개선을 장려합니다.
        심리적 안전감을 통해 팀원들이 실수에서 배우고 혁신할 수 있도록 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>OPS03-BP01:</strong> 탁월성 추진 임원 스폰서 확보<br />
          <span>운영 우수성 이니셔티브에 대한 경영진의 지원과 후원을 확보합니다.</span>
        </li>
        <li>
          <strong>OPS03-BP02:</strong> 팀원 발전 지원<br />
          <span>교육, 멘토링, 커리어 개발 기회를 제공하여 팀원들의 역량을 지속적으로 향상시킵니다.</span>
        </li>
        <li>
          <strong>OPS03-BP03:</strong> 다양성, 형평성, 포용성 증진<br />
          <span>다양한 배경과 관점을 가진 팀을 구성하여 더 나은 의사결정과 혁신을 이끌어냅니다.</span>
        </li>
        <li>
          <strong>OPS03-BP04:</strong> 회사 문화에 맞는 운영 팀 구성원 채용<br />
          <span>기술 역량뿐만 아니라 조직 가치와 운영 문화에 맞는 인재를 채용합니다.</span>
        </li>
        <li>
          <strong>OPS03-BP05:</strong> 실험 문화 장려<br />
          <span>실패를 학습 기회로 보고, 안전한 환경에서 새로운 아이디어와 접근 방식을 실험할 수 있도록 합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
