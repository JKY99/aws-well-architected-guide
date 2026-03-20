import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP04 — 비용 효율적인 라이선스의 소프트웨어 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>소프트웨어 라이선스 비용을 최소화하는 옵션을 선택합니다. 오픈소스 소프트웨어, AWS 포함 라이선스, BYOL 옵션 등을 고려합니다.</p>
      <h2>원하는 결과</h2>
      <p>소프트웨어 라이선스 비용이 최적화되어 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용이 높은 라이선스 소프트웨어를 사용 가능한 오픈소스 대안 없이 선택합니다.</li>
        <li>BYOL(Bring Your Own License) 옵션을 활용하지 않습니다.</li>
        <li>라이선스 비용이 총비용의 상당 부분을 차지합니다.</li>
        <li>과도한 라이선스를 구매합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>소프트웨어 라이선스 비용이 절감됩니다.</li>
        <li>총소유비용(TCO)이 감소합니다.</li>
        <li>라이선스 컴플라이언스 위험이 감소합니다.</li>
        <li>벤더 종속이 줄어듭니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>오픈소스 대안 평가: 유료 소프트웨어 대신 오픈소스 대안을 평가합니다.</li>
        <li>AWS License Manager 활용: 기존 라이선스를 추적하고 BYOL 옵션을 활용합니다.</li>
        <li>License Included 옵션: AWS에 포함된 라이선스를 활용하여 별도 구매를 줄입니다.</li>
        <li>라이선스 최적화: 실제 사용량에 맞는 라이선스만 구매합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS License Manager</li>
        <li>AWS Marketplace</li>
        <li>Amazon EC2 (License Included AMIs)</li>
      </ul>
      <PageNav />
    </article>
  );
}
