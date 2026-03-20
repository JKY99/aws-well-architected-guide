import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS03-BP05 — 실험 장려</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 중간입니다.</p>
      </div>

      <p>
        실험은 새로운 아이디어를 제품과 기능으로 전환하는 촉매제입니다. 실험은 학습을 가속화하고
        팀 구성원의 관심과 참여를 유지합니다. 팀 구성원은 혁신을 이끌기 위해 자주 실험하도록 장려됩니다.
        원하지 않는 결과가 발생하더라도 무엇을 하지 말아야 하는지 아는 것에 가치가 있습니다.
        팀 구성원은 원하지 않는 결과로 끝나는 성공적인 실험에 대해 처벌받지 않습니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>조직이 혁신을 촉진하기 위해 실험을 장려합니다.</li>
        <li>실험이 학습 기회로 활용됩니다.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>A/B 테스트를 실행하고 싶지만 실험을 실행하는 메커니즘이 없어 실험 능력 없이 UI 변경을 배포하여 부정적인 고객 경험이 초래되는 경우</li>
        <li>회사에 스테이징과 프로덕션 환경만 있고 새로운 기능이나 제품을 실험할 샌드박스 환경이 없어 프로덕션 환경 내에서 실험해야 하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실험이 혁신을 이끕니다.</li>
        <li>실험을 통해 사용자 피드백에 더 빠르게 반응할 수 있습니다.</li>
        <li>조직이 학습 문화를 발전시킵니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>조직 전반의 리더십과 협력하여 실험을 지원합니다. 팀 구성원이 안전한 방식으로 실험을 수행하도록 장려되어야 합니다.</li>
        <li>프로덕션과 유사한 조건에서 안전하게 실험할 수 있는 환경을 제공합니다. 별도의 AWS 계정을 사용하여 샌드박스 환경을 생성하고 AWS Control Tower를 활용하여 이 계정을 프로비저닝합니다.</li>
        <li>AWS AppConfig 기능 플래그를 사용하여 기능 플래그를 생성하고 AWS Lambda 버전을 활용하여 베타 테스트를 위한 새 버전을 배포합니다.</li>
        <li>Amazon CloudWatch Evidently를 사용하여 실험과 기능 관리를 수행합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Evidently — 실험 및 기능 관리 서비스</li>
        <li>AWS AppConfig — 기능 플래그 및 구성 관리</li>
        <li>AWS Control Tower — 멀티 계정 거버넌스 및 환경 프로비저닝</li>
        <li>관련 모범 사례: OPS11-BP02, OPS11-BP03</li>
      </ul>

      <PageNav />
    </article>
  );
}
