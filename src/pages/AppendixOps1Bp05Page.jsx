import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS01-BP05 — 위협 환경 평가</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 중간입니다.</p>
      </div>

      <p>
        비즈니스에 대한 위협(예: 경쟁, 비즈니스 리스크 및 부채, 운영 리스크, 정보 보안 위협)을 평가하고
        리스크 레지스트리에 최신 정보를 유지합니다. 노력을 집중할 곳을 결정할 때 리스크의 영향을 포함합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        Well-Architected 및 Trusted Advisor 출력을 정기적으로 검토하고 조치합니다.
        서비스의 최신 패치 상태를 파악합니다. 알려진 위협의 리스크와 영향을 이해하고 적절히 조치합니다.
        필요에 따라 완화 조치를 구현하고 조치 사항과 맥락을 전달합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드에 영향을 미칠 수 있는 보안 업데이트를 인식하지 못한 채 제품에서 오래된 버전의 소프트웨어 라이브러리를 사용하는 경우</li>
        <li>경쟁업체가 이미 해결한 알려진 고객 불만 사항을 해결하는 것을 우선시하지 않는 경우</li>
        <li>규제 기관이 해당 산업에서 적극적으로 추진하고 있는 법적 규제 요건 준수를 우선시하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조직과 워크로드에 대한 위협을 파악하고 이해합니다.</li>
        <li>우선순위에 따라 어떤 위협을 해결할지 결정합니다.</li>
        <li>필요한 리소스를 적절히 배분합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>위협 환경 평가: 경쟁, 비즈니스 리스크, 부채, 운영 리스크, 정보 보안 위협을 포함한 위협을 검토합니다.</li>
        <li>위협 모델 유지: 잠재적 위협, 계획 및 구현된 완화 조치, 위협 우선순위, 위협이 사고로 현실화될 확률, 사고 복구 비용, 예상 피해, 사고 예방 비용을 파악하는 문서를 수립하고 유지합니다. 위협 모델 내용이 변경됨에 따라 우선순위를 수정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS 최신 보안 공지</li>
        <li>AWS Cloud Compliance</li>
        <li>관련 모범 사례: SEC01-BP07 위협 모델을 사용하여 위협 파악 및 완화 우선순위 결정</li>
      </ul>

      <PageNav />
    </article>
  );
}
